import assert from 'node:assert/strict';
import { existsSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { stringify } from 'yaml';
import { load } from 'cheerio';

// Build real Astro pages for each optional-data state. No existing files are replaced.
const cases = [
  { id: 'neither', usage: {}, section: false },
  { id: 'open', usage: { access: 'open' }, section: false },
  { id: 'access-only', usage: { access: 'login-required' }, section: true },
  { id: 'features-only', usage: { usageFeatures: ['on-device-processing', 'no-registration'] }, section: true },
  { id: 'both', usage: { access: 'login-required', usageFeatures: ['on-device-processing'], usageNote: 'Initial account setup' }, section: true },
  { id: 'note-only', usage: { usageNote: 'A preparation note' }, section: true },
];
const files = cases.flatMap(({ id }) => ['ja', 'en'].map((locale) => `src/content/apps/${locale}/usage-fixture-${id}.md`));
assert.ok(files.every((file) => !existsSync(file)), 'Usage fixture files exist; refusing to overwrite them.');
const { bin } = JSON.parse(readFileSync(new URL('../node_modules/astro/package.json', import.meta.url), 'utf8'));
const cli = fileURLToPath(new URL(typeof bin === 'string' ? bin : bin.astro, new URL('../node_modules/astro/package.json', import.meta.url)));
function run(args) {
  const result = spawnSync(process.execPath, args, { encoding: 'utf8' });
  if (result.status !== 0) throw new Error(result.stdout + result.stderr);
}
try {
  for (const { id, usage } of cases) for (const locale of ['ja', 'en']) {
    const data = {
      appId: `usage-fixture-${id}`, slug: `usage-fixture-${id}`, locale,
      title: `Usage fixture ${id}`, description: `${locale}: Fixture description`, category: 'utilities',
      updatedAt: '2026-10-02', status: 'experimental', tags: [], featured: false, sample: true,
      appUrl: 'https://example.org/', ...usage,
      ...(usage.usageNote ? { usageNote: `${locale}: ${usage.usageNote}` } : {}),
    };
    writeFileSync(`src/content/apps/${locale}/${data.slug}.md`, `---\n${stringify(data)}---\n\n## ${locale === 'ja' ? '概要' : 'Overview'}\n\n${locale}: Fixture body.\n`);
  }
  run(['scripts/validate-content.mjs']);
  run([cli, 'build']);
  // The generated-page validator checks exact labels, absence, list names and order on all cards/details.
  run(['scripts/validate-links.mjs']);
  for (const { id, section } of cases) for (const locale of ['ja', 'en']) {
    const $ = load(readFileSync(`dist/${locale === 'ja' ? '' : 'en/'}apps/usage-fixture-${id}/index.html`, 'utf8'));
    assert.equal($('.app-usage').length, Number(section), `${locale}/${id}: section visibility`);
    assert.equal($('script').length, 0, `${locale}/${id}: usage rendering requires no browser JavaScript`);
  }
  console.log('Usage rendering: six optional-data states in both languages passed; card/detail separation, labels, lists and ordering validated.');
} finally {
  for (const file of files) if (existsSync(file)) unlinkSync(file);
  run(['scripts/validate-content.mjs']);
  run([cli, 'build']);
  run(['scripts/validate-links.mjs']);
  console.log('Usage fixtures removed; original portfolio rebuilt and validated.');
}
