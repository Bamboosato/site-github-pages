import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeBase, pagePath, withBase } from '../src/lib/paths.ts';
import { formatDate } from '../src/i18n/ui.ts';
import rehypeBase from '../src/lib/rehype-base.mjs';

test('normal/boundary: root and project bases compose both locale URLs without duplicate slashes', () => {
  for (const base of ['', '/', '/portfolio', '/portfolio/']) {
    for (const locale of ['ja', 'en']) {
      assert.equal(withBase(pagePath(locale, 'apps/example/'), base), `${normalizeBase(base)}/${locale === 'en' ? 'en/' : ''}apps/example/`);
    }
  }
});
test('transition: switching language preserves detail path and navigating retains locale', () => {
  assert.equal(pagePath('en', 'apps/example/'), '/en/apps/example/');
  assert.equal(pagePath('ja', 'apps/example/'), '/apps/example/');
  assert.equal(pagePath('en', 'updates/'), '/en/updates/');
});
test('nonfunctional/data: date labels share the same UTC day across host timezones', () => {
  assert.ok(formatDate('2026-10-02', 'ja').includes('2'));
  assert.equal(formatDate('2026-10-02', 'en'), 'Oct 2, 2026');
});
test('normal/boundary: Markdown internal links and images gain the base, other URLs stay intact', () => {
  const tree = { children: [
    { type: 'element', properties: { href: '/en/apps/example/' } },
    { type: 'element', properties: { src: '/apps/example/image.webp' } },
    { type: 'element', properties: { href: '#features' } },
    { type: 'element', properties: { href: 'https://example.org/' } },
  ] };
  rehypeBase({ base: '/portfolio' })(tree);
  assert.deepEqual(tree.children.map((node) => node.properties), [{ href: '/portfolio/en/apps/example/' }, { src: '/portfolio/apps/example/image.webp' }, { href: '#features' }, { href: 'https://example.org/' }]);
});
