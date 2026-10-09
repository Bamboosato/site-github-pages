import { readFileSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { load } from 'cheerio';
import { filesUnder, readContent } from './content-files.mjs';
import { normalizeBase, pagePath, withBase } from '../src/lib/paths.ts';
import { siteConfig } from '../src/config/site.ts';
import { accessLabels, usageFeatures, ui, categories, categoryDescriptions } from '../src/i18n/ui.ts';
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
  const localeApps = apps.filter((app) => app.data.locale === locale);
  const presentCategories = Object.keys(categories).filter((id) => localeApps.some((app) => app.data.category === id));
  for (const path of ['', 'apps/', 'updates/', 'about/', ...localeApps.map((app) => `apps/${app.data.slug}/`), ...presentCategories.map((id) => `apps/category/${id}/`)]) {
    const url = withBase(pagePath(locale, path), base);
    if (!pages.has(url)) errors.push(`Missing required page: ${url}`);
  }
}
let checkedLinks = 0;
for (const [url, { $ }] of pages) {
  const locale = url.slice(base.length).startsWith('/en/') ? 'en' : 'ja';
  const languagePath = url.slice(base.length).replace(/^\/en\//, '/');
  if ($('html').attr('lang') !== locale) errors.push(`${url}: incorrect html lang`);
  const localeApps = apps.filter((entry) => entry.data.locale === locale)
    .sort((a, b) => b.data.updatedAt.localeCompare(a.data.updatedAt) || a.data.appId.localeCompare(b.data.appId));
  const presentCategories = Object.keys(categories).filter((id) => localeApps.some((entry) => entry.data.category === id));
  const category = languagePath.match(/^\/apps\/category\/([^/]+)\/$/)?.[1];
  if (languagePath === '/') {
    const tiles = $('.category-tile');
    const expectedLinks = presentCategories.map((id) => withBase(pagePath(locale, `apps/category/${id}/`), base));
    if (JSON.stringify(tiles.map((_, el) => $(el).attr('href')).get()) !== JSON.stringify(expectedLinks)) errors.push(`${url}: Home category order or links differ`);
    if (JSON.stringify(tiles.map((_, el) => $(el).children('span').eq(1).text()).get()) !== JSON.stringify(presentCategories.map((id) => categories[id][locale]))) errors.push(`${url}: Home category labels differ`);
  }
  if (languagePath === '/apps/' || category) {
    const nav = $('.category-nav a');
    const expectedLinks = [withBase(pagePath(locale, 'apps/'), base), ...presentCategories.map((id) => withBase(pagePath(locale, `apps/category/${id}/`), base))];
    if (JSON.stringify(nav.map((_, el) => $(el).attr('href')).get()) !== JSON.stringify(expectedLinks)) errors.push(`${url}: category nav order, empty categories or links differ`);
    if (JSON.stringify(nav.map((_, el) => $(el).text()).get()) !== JSON.stringify([ui[locale].all, ...presentCategories.map((id) => categories[id][locale])])) errors.push(`${url}: category nav labels differ`);
    const selectedLink = withBase(pagePath(locale, category ? `apps/category/${category}/` : 'apps/'), base);
    if (nav.filter('[aria-current="page"]').length !== 1 || nav.filter('[aria-current="page"]').attr('href') !== selectedLink) errors.push(`${url}: selected category differs`);
    const expectedApps = localeApps.filter((entry) => !category || entry.data.category === category);
    const actualIds = $('.category-section .app-card').map((_, el) => $(el).attr('data-app-id')).get();
    if (JSON.stringify(actualIds) !== JSON.stringify(expectedApps.map((entry) => entry.data.appId))) errors.push(`${url}: category membership or update order differs`);
    if ($('.category-heading > span').text() !== `${expectedApps.length} ${ui[locale].count}`) errors.push(`${url}: category count differs`);
  }
  if (category) {
    if (!Object.hasOwn(categories, category)) errors.push(`${url}: unknown category page`);
    else {
      const label = categories[category][locale];
      const description = categoryDescriptions[category]?.[locale] || ui[locale].appsDescription;
      if ($('h1').text() !== label || $('.category-heading h2').text() !== label) errors.push(`${url}: category heading differs`);
      if ($('.page-heading > p').last().text() !== description) errors.push(`${url}: category explanation differs`);
      if ($('title').text() !== `${label} | ${siteConfig.name}` || $('meta[property="og:title"]').attr('content') !== `${label} | ${siteConfig.name}`) errors.push(`${url}: category title or OG title differs`);
      if ($('meta[name="description"]').attr('content') !== description || $('meta[property="og:description"]').attr('content') !== description) errors.push(`${url}: category description or OG description differs`);
    }
  }
  // Verify the presentation at every use of the common card, including Home and categories.
  $('.app-card').each((_, node) => {
    const card = $(node);
    const app = apps.find((entry) => entry.data.locale === locale && entry.data.appId === card.attr('data-app-id'));
    if (!app) { errors.push(`${url}: card has no content record`); return; }
    const d = app.data;
    if (card.find('.detail-hero-image').length) errors.push(`${url}: detail hero image leaked onto a card`);
    if (card.find('.category-label').text() !== categories[d.category][locale]) errors.push(`${url}: card category label differs for ${d.appId}`);
    const expected = d.usageFeatures.map((id) => usageFeatures[id][locale]);
    const actual = card.find('.usage-features li').map((_, li) => $(li).text()).get();
    if (JSON.stringify(actual) !== JSON.stringify(expected)) errors.push(`${url}: card features differ for ${d.appId}`);
    if (card.find('.app-usage, .usage-access, .usage-note').length || (d.usageNote && card.text().includes(d.usageNote))) errors.push(`${url}: conditions or notes leaked onto ${d.appId} card`);
    if (card.find('.usage-features').length !== Number(expected.length > 0) || (expected.length && card.find('.usage-features').attr('aria-label') !== ui[locale].features)) errors.push(`${url}: empty or unnamed card features`);
    if (card.find('.usage-features a, .usage-features button, .usage-features [tabindex]').length) errors.push(`${url}: explanatory chips must be static`);
    const technologies = card.find('.tags li').map((_, li) => $(li).text()).get();
    if (JSON.stringify(technologies) !== JSON.stringify(d.tags) || card.find('.tags').length !== Number(d.tags.length > 0) || (d.tags.length && card.find('.tags').attr('aria-label') !== ui[locale].technologies)) errors.push(`${url}: card technology tags differ or lack a label`);
    const sequence = card.find('.card-body').children().map((_, el) => $(el).attr('class')).get().filter((name) => ['card-description', 'usage-features', 'tags', 'card-date', 'card-actions'].includes(name));
    const expectedSequence = ['card-description', ...(expected.length ? ['usage-features'] : []), ...(d.tags.length ? ['tags'] : []), 'card-date', 'card-actions'];
    if (JSON.stringify(sequence) !== JSON.stringify(expectedSequence)) errors.push(`${url}: wrong card information order`);
    if (d.appUrl && !card.find('.card-actions a.button').text().includes(ui[locale].open)) errors.push(`${url}: Open app label changed`);
  });
  const detailApp = apps.find((entry) => entry.data.locale === locale && url === withBase(pagePath(locale, `apps/${entry.data.slug}/`), base));
  if (detailApp) {
    const d = detailApp.data;
    const hero = $('.detail-hero-with-image > .detail-hero-image');
    if (hero.length !== Number(Boolean(d.heroImage)) || $('.detail-hero-image').length !== hero.length) errors.push(`${url}: missing or duplicate detail hero image`);
    if (d.heroImage) {
      const expected = { src: withBase(d.heroImage.src, base), alt: d.heroImage.alt, width: String(d.heroImage.width), height: String(d.heroImage.height), loading: 'eager', fetchpriority: 'high', decoding: 'async' };
      for (const [attribute, value] of Object.entries(expected)) {
        if (hero.attr(attribute) !== value) errors.push(`${url}: hero image ${attribute} differs`);
      }
      if (!$('.detail-hero-with-image > .detail-heading .detail-actions').length) errors.push(`${url}: hero actions missing`);
    }
    if ($('.detail-heading .category-label').text() !== categories[d.category][locale]) errors.push(`${url}: detail category label differs`);
    const expectedAccess = accessLabels[d.access][locale];
    const visible = Boolean(expectedAccess || d.usageFeatures.length || d.usageNote);
    const section = $('.app-usage');
    if (section.length !== Number(visible)) errors.push(`${url}: missing or empty usage section`);
    if (visible && (section.attr('aria-labelledby') !== 'usage-requirements' || section.find('#usage-requirements').text() !== ui[locale].requirements)) errors.push(`${url}: unnamed requirements section`);
    if (section.find('.usage-access').text() !== expectedAccess || section.find('.usage-access').length !== Number(Boolean(expectedAccess))) errors.push(`${url}: wrong access label`);
    if (section.find('.usage-note').text() !== (d.usageNote || '') || section.find('.usage-note').length !== Number(Boolean(d.usageNote))) errors.push(`${url}: usage note missing or truncated`);
    const features = section.find('.usage-features li').map((_, li) => $(li).text()).get();
    if (JSON.stringify(features) !== JSON.stringify(d.usageFeatures.map((id) => usageFeatures[id][locale])) || section.find('.usage-features').length !== Number(d.usageFeatures.length > 0)) errors.push(`${url}: detail features differ or are empty`);
    if (features.length && section.find('.usage-features').attr('aria-label') !== ui[locale].features) errors.push(`${url}: unnamed detail features`);
  }
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
