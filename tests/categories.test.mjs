import test from 'node:test';
import assert from 'node:assert/strict';
import { categories, categoryDescriptions } from '../src/i18n/ui.ts';
import { readContent } from '../scripts/content-files.mjs';
import { validateRecords } from '../src/lib/validation.ts';

// Acceptance sets from the category instructions: counts alone would miss swapped apps.
const expectedMembership = {
  'sports-competition': ['draw-lab', 'matchup-lab', 'tennis-matchup-app', 'tennis-organizing-app'],
  'visual-experimental': ['face-icon-maker', 'app-reveal-lab', 'interactive-moire-art', 'turing-pattern-lab', 'app-slide-puzzle-lab'],
  utilities: ['markdown-knowledge-board', 'local-document-preprocessor', 'local-pii-masker'],
  productivity: ['rsvp-manager-app', 'bbcafe-app'],
};

test('normal/data: both languages match all fourteen approved category memberships, not only counts', () => {
  const { apps, errors } = readContent();
  assert.deepEqual(errors, []);
  for (const locale of ['ja', 'en']) {
    const entries = apps.filter((entry) => entry.data.locale === locale);
    assert.equal(entries.length, 14, `${locale}: preserve app set`);
    assert.equal(new Set(entries.map((entry) => entry.data.appId)).size, 14, `${locale}: no duplicated app`);
    assert.deepEqual([...new Set(entries.map((entry) => entry.data.category))].sort(), Object.keys(expectedMembership).sort());
    for (const [category, expected] of Object.entries(expectedMembership)) {
      assert.deepEqual(entries.filter((entry) => entry.data.category === category).map((entry) => entry.data.appId).sort(), [...expected].sort(), `${locale}/${category}: exact membership`);
    }
  }
});

test('UI/compatibility: approved labels and display order retain the four existing category IDs', () => {
  assert.deepEqual(Object.keys(categories).filter((id) => id !== 'other'), Object.keys(expectedMembership));
  assert.deepEqual(Object.fromEntries(Object.keys(expectedMembership).map((id) => [id, categories[id]])), {
    'sports-competition': { ja: 'スポーツ・対戦運営', en: 'Sports & Match Management' },
    'visual-experimental': { ja: 'ビジュアル・ホビー', en: 'Visual & Hobbies' },
    utilities: { ja: '文書・情報整理', en: 'Documents & Information' },
    productivity: { ja: '予定・連絡管理', en: 'Events & Communication' },
  });
  for (const id of Object.keys(expectedMembership)) for (const locale of ['ja', 'en']) {
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
