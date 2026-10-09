import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { categories, categoryDescriptions } from '../src/i18n/ui.ts';
import { readContent } from '../scripts/content-files.mjs';
import { validateRecords } from '../src/lib/validation.ts';

const approvedCategoryIds = ['sports-competition', 'visual-experimental', 'utilities', 'productivity'];

// Expected IDs and categories come from the reviewed inventory, never from app Markdown.
function assertMembership(repositories, apps) {
  const expectedIds = repositories.map((repo) => repo.name).sort();
  assert.equal(new Set(expectedIds).size, expectedIds.length, 'inventory names must be unique');
  for (const repo of repositories) {
    assert.ok(approvedCategoryIds.includes(repo.category), `${repo.name}: approved inventory category required`);
  }
  for (const locale of ['ja', 'en']) {
    const entries = apps.filter((entry) => entry.data.locale === locale);
    const ids = entries.map((entry) => entry.data.appId).sort();
    assert.equal(new Set(ids).size, ids.length, `${locale}: no duplicated app`);
    assert.deepEqual(ids, expectedIds, `${locale}: no missing or extra repositories`);
    for (const entry of entries) {
      assert.ok(approvedCategoryIds.includes(entry.data.category), `${locale}/${entry.data.appId}: approved content category required`);
    }
    for (const category of approvedCategoryIds) {
      const expected = repositories.filter((repo) => repo.category === category).map((repo) => repo.name).sort();
      assert.deepEqual(entries.filter((entry) => entry.data.category === category).map((entry) => entry.data.appId).sort(), expected, `${locale}/${category}: exact membership`);
    }
  }
}

test('normal/data: both languages match the independently reviewed inventory category memberships', () => {
  const inventory = JSON.parse(readFileSync(new URL('../docs/public-repositories.json', import.meta.url), 'utf8'));
  const { apps, errors } = readContent();
  assert.deepEqual(errors, []);
  assertMembership(inventory.repositories, apps);
});

function translations(appId, category) {
  return ['ja', 'en'].map((locale) => ({ data: { appId, category, locale } }));
}

test('boundary/data: membership checks follow additions, removals and empty categories without fixed app counts', () => {
  const alpha = { name: 'alpha', category: 'utilities' };
  const beta = { name: 'beta', category: 'visual-experimental' };
  assertMembership([alpha], translations('alpha', 'utilities'));
  assertMembership([alpha, beta], [...translations('alpha', 'utilities'), ...translations('beta', 'visual-experimental')]);
  assertMembership([beta], translations('beta', 'visual-experimental'));
  assertMembership([], []);
});

test('abnormal/data: inventory comparison rejects omissions, extras, duplicates and category swaps even when counts match', () => {
  const repositories = [{ name: 'alpha', category: 'utilities' }, { name: 'beta', category: 'visual-experimental' }];
  const apps = [...translations('alpha', 'utilities'), ...translations('beta', 'visual-experimental')];
  const invalidContent = {
    'missing both languages': apps.filter((entry) => entry.data.appId !== 'alpha'),
    'missing English only': apps.filter((entry) => !(entry.data.appId === 'alpha' && entry.data.locale === 'en')),
    'extra repository': [...apps, ...translations('gamma', 'utilities')],
    'duplicate Japanese': [...apps, apps[0]],
    'different English ID at same count': apps.map((entry) => entry.data.locale === 'en' && entry.data.appId === 'alpha' ? { data: { ...entry.data, appId: 'gamma' } } : entry),
    'category mismatch in English': apps.map((entry) => entry.data.locale === 'en' && entry.data.appId === 'alpha' ? { data: { ...entry.data, category: 'visual-experimental' } } : entry),
    'category swap in both languages': apps.map((entry) => ({ data: { ...entry.data, category: entry.data.appId === 'alpha' ? 'visual-experimental' : 'utilities' } })),
    'unknown content category': apps.map((entry, index) => index === 0 ? { data: { ...entry.data, category: 'constructor' } } : entry),
  };
  for (const [label, invalid] of Object.entries(invalidContent)) {
    assert.throws(() => assertMembership(repositories, invalid), assert.AssertionError, label);
  }
  for (const category of [undefined, 'unknown-category', 'constructor', 'other']) {
    assert.throws(() => assertMembership([{ ...repositories[0], category }, repositories[1]], apps), assert.AssertionError, `invalid inventory category: ${category}`);
  }
  assert.throws(() => assertMembership([...repositories, repositories[0]], apps), assert.AssertionError, 'duplicate inventory name');
});

test('UI/compatibility: approved labels and display order retain the four existing category IDs', () => {
  assert.deepEqual(Object.keys(categories).filter((id) => id !== 'other'), approvedCategoryIds);
  assert.deepEqual(Object.fromEntries(approvedCategoryIds.map((id) => [id, categories[id]])), {
    'sports-competition': { ja: 'スポーツ・対戦運営', en: 'Sports & Match Management' },
    'visual-experimental': { ja: 'ビジュアル・ホビー', en: 'Visual & Hobbies' },
    utilities: { ja: '文書・情報整理', en: 'Documents & Information' },
    productivity: { ja: '予定・連絡管理', en: 'Events & Communication' },
  });
  for (const id of approvedCategoryIds) for (const locale of ['ja', 'en']) {
    assert.ok(categoryDescriptions[id][locale].trim(), `${id}/${locale}: dedicated explanation`);
  }
  assert.ok('other' in categories, 'reserved ID remains available without automatic assignment');
});

test('abnormal/boundary: unknown category IDs cannot pass through inherited object keys', () => {
  const { apps } = readContent();
  for (const category of ['unknown-category', 'constructor']) {
    const invalid = apps.map((entry, index) => index === 0 ? { ...entry, data: { ...entry.data, category } } : entry);
    assert.ok(validateRecords(invalid, []).some((error) => error.includes(`unknown category ${category}`)));
  }
});
