import { readFileSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { load } from 'cheerio';
import { filesUnder, readContent } from './content-files.mjs';
import { normalizeBase, pagePath, withBase } from '../src/lib/paths.ts';
import { siteConfig } from '../src/config/site.ts';
const base = normalizeBase(process.env.SITE_BASE || siteConfig.base);
const origin = new URL(process.env.SITE_URL || siteConfig.site).origin;
const dist = join(process.cwd(), 'dist');
const pages = new Map();
const errors = [];
for (const file of filesUnder(dist).filter((path) => path.endsWith('.html'))) {
  const path = relative(dist, file).replaceAll('\\', '/').replace(/index\.html$/, '');
  const url = withBase(`/${path}`, base);
  pages.set(url, { file, $: load(readFileSync(file, 'utf8')) });
}
const { apps } = readContent();
for (const locale of ['ja', 'en']) {
  for (const path of ['', 'apps/', 'updates/', 'about/', ...apps.filter((app) => app.data.locale === locale).map((app) => `apps/${app.data.slug}/`)]) {
    const url = withBase(pagePath(locale, path), base);
    if (!pages.has(url)) errors.push(`Missing required page: ${url}`);
  }
}
let checkedLinks = 0;
for (const [url, { $ }] of pages) {
  const locale = url.slice(base.length).startsWith('/en/') ? 'en' : 'ja';
  const languagePath = url.slice(base.length).replace(/^\/en\//, '/');
  if ($('html').attr('lang') !== locale) errors.push(`${url}: incorrect html lang`);
  if ($('h1').length !== 1) errors.push(`${url}: expected one h1`);
  if (!$('title').text().trim() || !$('meta[name="description"]').attr('content')) errors.push(`${url}: missing metadata`);
  if ($('link[rel="canonical"]').attr('href') !== `${origin}${url}`) errors.push(`${url}: incorrect canonical`);
  for (const targetLocale of ['ja', 'en']) {
    const expected = `${origin}${withBase(pagePath(targetLocale, languagePath), base)}`;
    if ($(`link[hreflang="${targetLocale}"]`).attr('href') !== expected) errors.push(`${url}: incorrect hreflang ${targetLocale}`);
    if ($(`.language-switch a[hreflang="${targetLocale}"]`).attr('href') !== new URL(expected).pathname) errors.push(`${url}: language switch loses page`);
  }
  for (const property of ['og:title', 'og:description', 'og:type', 'og:locale']) {
    if (!$(`meta[property="${property}"]`).attr('content')) errors.push(`${url}: missing ${property}`);
  }
  if ($('meta[property="og:url"]').attr('content') !== `${origin}${url}`) errors.push(`${url}: incorrect og:url`);
  let previousHeading = 0;
  $('main h1,main h2,main h3,main h4,main h5,main h6').each((_, element) => {
    const level = Number(element.tagName.slice(1));
    if (level > previousHeading + 1) errors.push(`${url}: heading skips a level at ${$(element).text()}`);
    previousHeading = level;
  });
  $('[href], [src]').each((_, element) => {
    for (const attribute of ['href', 'src']) {
      const value = $(element).attr(attribute);
      if (!value || /^(mailto:|tel:|data:)/.test(value)) continue;
      const destination = new URL(value, `${origin}${url}`);
      if (destination.origin !== origin) continue;
      checkedLinks++;
      if (!destination.pathname.startsWith(`${base}/`)) {
        errors.push(`${url}: link escapes base: ${value}`);
        continue;
      }
      const localPath = decodeURIComponent(destination.pathname.slice(base.length));
      const target = pages.get(destination.pathname);
      if (!target && !existsSync(join(dist, localPath))) errors.push(`${url}: broken ${attribute}: ${value}`);
      if (destination.hash && target && !target.$('[id]').toArray().some((node) => target.$(node).attr('id') === decodeURIComponent(destination.hash.slice(1)))) errors.push(`${url}: missing fragment: ${value}`);
      if (element.tagName === 'a' && target && !$(element).closest('.language-switch').length) {
        const targetLocale = localPath.startsWith('/en/') ? 'en' : 'ja';
        if (targetLocale !== locale) errors.push(`${url}: internal navigation changes language: ${value}`);
      }
    }
  });
  for (const selector of ['.category-section .app-card', '.update-entry']) {
    const seen = new Set();
    $(selector).each((_, element) => {
      const id = $(element).attr(selector.includes('app-card') ? 'data-app-id' : 'data-update-id');
      if (seen.has(id)) errors.push(`${url}: duplicate content ${id}`);
      seen.add(id);
    });
  }
}
if (errors.length) {
  console.error(`Generated-page validation failed (${errors.length}):\n${errors.join('\n')}`);
  process.exitCode = 1;
} else console.log(`Validated ${pages.size} pages and ${checkedLinks} local links/assets (base=${base || '/'}).`);
