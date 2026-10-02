import { existsSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { load } from 'cheerio';
import { stringify } from 'yaml';
import assert from 'node:assert/strict';
import { siteConfig } from '../src/config/site.ts';
import { normalizeBase } from '../src/lib/paths.ts';

// These exact files belong to this test. Refuse to replace an existing user file.
const fixtureFiles = ['ja', 'en'].map((locale) => `src/content/apps/${locale}/verification-fixture.md`);
const imageFile = 'public/verification-fixture.svg';
const ownedFiles = [...fixtureFiles, imageFile];
const base = normalizeBase(process.env.SITE_BASE || siteConfig.base);
assert.ok(ownedFiles.every((file) => !existsSync(file)), 'Verification fixture files already exist; refusing to overwrite them.');
const { bin } = JSON.parse(readFileSync(new URL('../node_modules/astro/package.json', import.meta.url), 'utf8'));
const cli = fileURLToPath(new URL(typeof bin === 'string' ? bin : bin.astro, new URL('../node_modules/astro/package.json', import.meta.url)));
function run(args, env = process.env) {
  const result = spawnSync(process.execPath, args, { env, encoding: 'utf8' });
  if (result.status !== 0) throw new Error(result.stdout + result.stderr);
}
function writePair(description) {
  for (const [index, locale] of ['ja', 'en'].entries()) {
    const data = {
      appId: 'verification-fixture', locale, title: 'Verification fixture', slug: 'verification-fixture',
      category: 'utilities', description: `${locale}: ${description}`, updatedAt: '2026-10-02',
      status: 'experimental', tags: [], featured: false, sample: true,
      appUrl: 'https://example.org/', githubUrl: 'https://example.org/source',
      thumbnail: { src: '/verification-fixture.svg', alt: `${locale}: Image` },
    };
    writeFileSync(fixtureFiles[index], `---\n${stringify(data)}---\n\n## ${locale === 'ja' ? '概要' : 'Overview'}\n\n${locale}: ${description}\n\n[${locale === 'ja' ? '一覧' : 'All apps'}](${locale === 'ja' ? '' : '/en'}/apps/)\n\n![${locale}: Image](/verification-fixture.svg)\n`);
  }
}
try {
  writeFileSync(imageFile, '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="80"><rect width="120" height="80" fill="#153f39"/></svg>');
  writePair('Initial content');
  run(['scripts/validate-content.mjs']);
  run([cli, 'build']);
  run(['scripts/validate-links.mjs']);
  for (const locale of ['ja', 'en']) {
    const file = `dist/${locale === 'ja' ? '' : 'en/'}apps/verification-fixture/index.html`;
    const $ = load(readFileSync(file, 'utf8'));
    assert.ok($('.app-body').text().includes('Initial content'));
    assert.ok($('.detail-actions a[href="https://example.org/"]').length === 1);
    assert.ok($('img').toArray().every((node) => $(node).attr('src') === `${base}/verification-fixture.svg`));
  }
  console.log('Markdown addition: both detail pages, optional actions, frontmatter images and Markdown images/links passed.');
  writePair('Revised content');
  run([cli, 'build']);
  for (const locale of ['ja', 'en']) {
    const $ = load(readFileSync(`dist/${locale === 'ja' ? '' : 'en/'}apps/verification-fixture/index.html`, 'utf8'));
    assert.ok($('.app-body').text().includes('Revised content'));
    assert.ok($('meta[name="description"]').attr('content').includes('Revised content'));
  }
  console.log('Markdown modification: both body content and metadata changed without editing UI files.');
} finally {
  for (const file of ownedFiles) if (existsSync(file)) unlinkSync(file);
  run(['scripts/validate-content.mjs']);
  run([cli, 'build']);
  run(['scripts/validate-links.mjs']);
  console.log('Verification fixtures removed; original site rebuilt and validated.');
}
