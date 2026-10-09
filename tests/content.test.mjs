import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { appSchema, updateSchema } from '../src/lib/schema.ts';
import { validateRecords } from '../src/lib/validation.ts';
import { readContent } from '../scripts/content-files.mjs';

function pair(id = 'test-app') {
  return ['ja', 'en'].map((locale) => ({ file: `${locale}/${id}.md`, body: 'Translated content', data: appSchema.parse({
    appId: id, locale, title: 'Test', slug: id, category: 'utilities', description: 'Test description',
    updatedAt: '2026-10-02', status: 'experimental', tags: [], featured: false,
  }) }));
}
function updates() {
  return ['ja', 'en'].map((locale) => ({ file: `${locale}/test-update.md`, body: 'Translated update', data: updateSchema.parse({ updateId: 'test-update', appId: 'test-app', locale, date: '2026-10-02', title: 'Update' }) }));
}

function assertInventoryIds(actual, expected, label) {
  assert.equal(new Set(expected).size, expected.length, 'inventory names must be unique');
  assert.equal(new Set(actual).size, actual.length, `${label}: IDs must be unique`);
  assert.deepEqual([...actual].sort(), [...expected].sort(), `${label}: no missing or extra repositories`);
}

test('boundary/data: inventory ID comparison follows count changes and rejects missing, extra and duplicate evidence IDs', () => {
  for (const expected of [[], ['alpha'], ['alpha', 'beta']]) {
    assertInventoryIds([...expected].reverse(), expected, 'valid coverage');
  }
  const expected = ['alpha', 'beta'];
  for (const actual of [['alpha'], ['alpha', 'beta', 'gamma'], ['alpha', 'alpha'], ['alpha', 'gamma']]) {
    assert.throws(() => assertInventoryIds(actual, expected, 'invalid coverage'), assert.AssertionError);
  }
  assert.throws(() => assertInventoryIds(['alpha', 'alpha'], ['alpha', 'alpha'], 'duplicate inventory'), assert.AssertionError);
});
test('normal: published content has complete translations and valid references', () => {
  const content = readContent();
  assert.deepEqual(content.errors, []);
  assert.deepEqual(validateRecords(content.apps, content.updates), []);
});

test('normal: both languages cover the complete verified public repository inventory', () => {
  const inventory = JSON.parse(readFileSync(new URL('../docs/public-repositories.json', import.meta.url), 'utf8'));
  const { apps, updates, errors } = readContent();
  assert.deepEqual(errors, []);
  const expected = inventory.repositories.map((repo) => repo.name).sort();
  assert.equal(new Set(expected).size, expected.length, 'inventory names must be unique');
  for (const locale of ['ja', 'en']) {
    const entries = apps.filter((entry) => entry.data.locale === locale);
    assertInventoryIds(entries.map((entry) => entry.data.appId), expected, locale);
    for (const repo of inventory.repositories) {
      const entry = entries.find((entry) => entry.data.appId === repo.name).data;
      assert.equal(repo.public, true, `${repo.name}: public source required`);
      assert.equal(entry.sample, false, `${repo.name}: real content required`);
      assert.equal(entry.githubUrl, `https://github.com/${inventory.owner}/${repo.name}`);
      assert.equal(entry.appUrl, repo.appUrl);
      assert.equal(entry.createdAt, repo.createdAt);
      assert.equal(entry.updatedAt, repo.updatedAt);
      assert.match(repo.commit, /^[a-f0-9]{40}$/, `${repo.name}: update evidence required`);
      assert.ok(updates.some((update) => update.data.locale === locale && update.data.appId === repo.name && update.data.date === repo.updatedAt), `${repo.name}: translated update required`);
    }
  }
});
test('scope: the site repository stays excluded from apps and updates even when public', () => {
  const inventory = JSON.parse(readFileSync(new URL('../docs/public-repositories.json', import.meta.url), 'utf8'));
  assert.deepEqual(inventory.excludedRepositories, ['site-github-pages']);
  const { apps, updates } = readContent();
  for (const excluded of inventory.excludedRepositories) {
    assert.ok(!inventory.repositories.some((repo) => repo.name === excluded), 'excluded repository must not enter the inventory');
    assert.ok(!apps.some((entry) => entry.data.appId === excluded), 'excluded repository must not have app pages');
    assert.ok(!updates.some((entry) => entry.data.appId === excluded), 'excluded repository must not have updates');
  }
});

test('boundary: no entries is valid, and optional URLs/images and empty tags are supported', () => {
  assert.deepEqual(validateRecords([], []), []);
  assert.deepEqual(validateRecords(pair(), []), []);
});
test('normal/boundary: detail hero image is optional and requires a local path, translated alt and positive integer dimensions', () => {
  const base = pair()[0].data;
  const heroImage = { src: '/apps/test-app/hero.webp', alt: 'Illustration', width: 1600, height: 900 };
  assert.equal(appSchema.safeParse({ ...base, heroImage }).success, true);
  for (const change of [{ src: '//example.org/image.webp' }, { alt: ' ' }, { width: 0 }, { height: -1 }, { width: 1.5 }, { height: undefined }]) {
    assert.equal(appSchema.safeParse({ ...base, heroImage: { ...heroImage, ...change } }).success, false);
  }
});
test('translation: hero source and dimensions must match, while alt is localized', () => {
  const apps = pair();
  apps[0].data.heroImage = { src: '/apps/test-app/hero.webp', alt: '図案', width: 1600, height: 900 };
  assert.match(validateRecords(apps, []).join('\n'), /heroImage/);
  apps[1].data.heroImage = { ...apps[0].data.heroImage, alt: 'Illustration' };
  assert.deepEqual(validateRecords(apps, []), []);
  for (const change of [{ src: '/other.webp' }, { width: 1200 }, { height: 675 }]) {
    apps[1].data.heroImage = { ...apps[0].data.heroImage, ...change };
    assert.match(validateRecords(apps, []).join('\n'), /heroImage/);
  }
});
test('abnormal: missing required frontmatter is rejected', () => {
  const data = pair()[0].data;
  for (const field of ['appId', 'slug', 'locale', 'title', 'description', 'updatedAt', 'category', 'status', 'tags', 'featured']) {
    const invalid = { ...data }; delete invalid[field];
    assert.equal(appSchema.safeParse(invalid).success, false, field);
  }
});
test('boundary: rejects impossible dates, accepts leap day and rejects reversed creation/update dates', () => {
  const data = pair()[0].data;
  assert.equal(appSchema.safeParse({ ...data, updatedAt: '2026-02-29' }).success, false);
  assert.equal(appSchema.safeParse({ ...data, updatedAt: '2024-02-29' }).success, true);
  assert.equal(appSchema.parse({ ...data, updatedAt: new Date('2026-10-02T00:00:00Z') }).updatedAt, '2026-10-02');
  assert.equal(appSchema.safeParse({ ...data, createdAt: '2026-10-03' }).success, false);
});
test('abnormal: refuses unsafe external URLs and image paths', () => {
  const data = pair()[0].data;
  for (const url of ['javascript:alert(1)', 'data:text/html,test', 'ftp://example.com/file']) assert.equal(appSchema.safeParse({ ...data, appUrl: url }).success, false);
  for (const src of ['//external.test/image.png', '/../secret', '/image.png?value=1']) assert.equal(appSchema.safeParse({ ...data, thumbnail: { src, alt: 'Image' } }).success, false);
});
test('abnormal: translation gaps and duplicate app IDs fail before content loading', () => {
  assert.match(validateRecords(pair().slice(0, 1), []).join('\n'), /en translation/);
  assert.match(validateRecords([...pair(), pair()[0]], []).join('\n'), /one ja translation/);
});
test('abnormal: distinct apps cannot share a slug in one language', () => {
  const other = pair('another-app').map((entry) => ({ ...entry, data: { ...entry.data, slug: 'test-app' } }));
  assert.match(validateRecords([...pair(), ...other], []).join('\n'), /duplicate slug/);
});
test('abnormal: every shared app field must match its translation', () => {
  const changes = { slug: 'other', category: 'productivity', updatedAt: '2026-10-01', tags: ['Canvas'], status: 'active', appUrl: 'https://example.org/', featured: true };
  for (const [field, value] of Object.entries(changes)) {
    const apps = pair(); apps[1].data[field] = value;
    assert.match(validateRecords(apps, []).join('\n'), new RegExp(`shared field ${field}`));
  }
});
test('abnormal: directory mismatch, unknown categories and empty bodies are reported with files', () => {
  const apps = pair(); apps[0].file = 'en/wrong.md'; apps[0].body = ''; apps[0].data.category = 'unknown';
  const errors = validateRecords(apps, []).join('\n');
  for (const expected of ['directory and locale', 'unknown category', 'content body is empty']) assert.ok(errors.includes(expected));
});
test('abnormal: update translation gaps, duplicate IDs, mismatched dates and dangling references fail', () => {
  assert.match(validateRecords(pair(), updates().slice(0, 1)).join('\n'), /en translation/);
  assert.match(validateRecords(pair(), [...updates(), updates()[0]]).join('\n'), /one ja translation/);
  const entries = updates(); entries[1].data.date = '2026-10-01';
  assert.match(validateRecords(pair(), entries).join('\n'), /shared field date/);
  assert.match(validateRecords([], updates()).join('\n'), /missing app/);
});
test('transition: translated descriptions may change without advancing the app update date', () => {
  const apps = pair(); apps[1].data.description = 'Revised translation'; apps[1].body = 'Corrected translation';
  assert.deepEqual(validateRecords(apps, updates()), []);
});

test('normal and boundary: optional usage data supports neither, access only, features only and both', () => {
  const base = pair()[0].data;
  const omitted = { ...base }; delete omitted.access; delete omitted.usageFeatures;
  const parsed = appSchema.parse(omitted);
  assert.equal(parsed.access, 'unknown', 'omission must not imply open access');
  assert.deepEqual(parsed.usageFeatures, []);
  for (const usage of [
    { access: 'login-required' },
    { usageFeatures: ['on-device-processing', 'no-registration'] },
    { access: 'role-dependent', usageFeatures: ['on-device-processing'], usageNote: 'Organizer login; invitee PIN' },
    { access: 'open', usageFeatures: ['on-device-processing', 'no-registration', 'offline-after-setup'], usageNote: 'First use online' },
  ]) assert.equal(appSchema.safeParse({ ...base, ...usage }).success, true);
});

test('abnormal and boundary: unsupported IDs, duplicates, more than three features and empty notes fail', () => {
  const base = pair()[0].data;
  for (const usage of [
    { access: 'public' }, { usageFeatures: ['pwa'] },
    { usageFeatures: ['on-device-processing', 'on-device-processing'] },
    { usageFeatures: ['on-device-processing', 'no-registration', 'offline-after-setup', 'on-device-processing'], usageNote: 'First use online' },
    { usageNote: '' }, { usageNote: '  ' },
  ]) assert.equal(appSchema.safeParse({ ...base, ...usage }).success, false, JSON.stringify(usage));
  assert.equal(appSchema.parse({ ...base, usageNote: '  A translated note  ' }).usageNote, 'A translated note');
});

test('abnormal: login contradictions, unexplained roles and offline prerequisites are rejected', () => {
  const base = pair()[0].data;
  for (const usage of [
    { access: 'login-required', usageFeatures: ['no-registration'] },
    { access: 'role-dependent', usageFeatures: ['no-registration'], usageNote: 'Different roles' },
    { access: 'role-dependent' }, { usageFeatures: ['offline-after-setup'] },
  ]) assert.equal(appSchema.safeParse({ ...base, ...usage }).success, false, JSON.stringify(usage));
});

test('translation: usage IDs must match and notes must exist in both languages without sharing translated text', () => {
  for (const [field, value] of Object.entries({ access: 'open', usageFeatures: ['on-device-processing'] })) {
    const apps = pair(); apps[1].data[field] = value;
    assert.match(validateRecords(apps, []).join('\n'), new RegExp(`shared field ${field}`));
  }
  const apps = pair(); apps[0].data.usageNote = '日本語の補足';
  assert.match(validateRecords(apps, []).join('\n'), /usageNote translation is missing/);
  apps[1].data.usageNote = 'English note';
  assert.deepEqual(validateRecords(apps, []), []);
});

test('evidence: all published usage metadata matches its pinned source audit', () => {
  const inventory = JSON.parse(readFileSync(new URL('../docs/public-repositories.json', import.meta.url), 'utf8'));
  const audit = JSON.parse(readFileSync(new URL('../docs/app-usage-evidence.json', import.meta.url), 'utf8'));
  const { apps, errors } = readContent();
  assert.deepEqual(errors, []);
  const expected = inventory.repositories.map((repo) => repo.name);
  assertInventoryIds(audit.repositories.map((repo) => repo.name), expected, 'usage evidence');
  for (const locale of ['ja', 'en']) {
    assertInventoryIds(apps.filter((app) => app.data.locale === locale).map((app) => app.data.appId), expected, locale);
  }
  for (const repo of audit.repositories) {
    assert.match(repo.commit, /^[a-f0-9]{40}$/);
    assert.ok(repo.sourcePaths.includes('README.md'));
    assert.ok(repo.confirmed.length > 0 && repo.notVerified.length > 0);
    for (const app of apps.filter((app) => app.data.appId === repo.name)) {
      assert.equal(app.data.access, repo.access);
      assert.deepEqual(app.data.usageFeatures, repo.usageFeatures);
    }
  }
  const bbcafe = audit.repositories.find((repo) => repo.name === 'bbcafe-app');
  assert.equal(bbcafe.operationalConfirmation.source, 'user');
  assert.equal(bbcafe.operationalConfirmation.date, '2026-10-02');
});
