import { categories, locales } from '../i18n/ui.ts';
import type { AppData, UpdateData } from './schema.ts';

export type RecordEntry<T> = { file: string; data: T; body: string };
const sharedAppFields = ['appId', 'slug', 'category', 'appUrl', 'githubUrl', 'createdAt', 'updatedAt', 'status', 'tags', 'featured', 'sample', 'version', 'license', 'access', 'usageFeatures'] as const;

/** Check raw files before Astro loaders can overwrite entries with duplicate IDs. */
export function validateRecords(apps: RecordEntry<AppData>[], updates: RecordEntry<UpdateData>[]): string[] {
  const errors: string[] = [];
  for (const entry of [...apps, ...updates]) {
    if (!entry.body.trim()) errors.push(`${entry.file}: content body is empty`);
    if (entry.file.split('/')[0] !== entry.data.locale) errors.push(`${entry.file}: directory and locale disagree`);
  }
  for (const entry of apps) {
    if (!Object.hasOwn(categories, entry.data.category)) errors.push(`${entry.file}: unknown category ${entry.data.category}`);
  }
  function pairs<T extends { locale: 'ja' | 'en' }>(entries: RecordEntry<T>[], idKey: keyof T, shared: readonly (keyof T)[]) {
    const groups = new Map<string, RecordEntry<T>[]>();
    for (const entry of entries) {
      const key = String(entry.data[idKey]);
      groups.set(key, [...(groups.get(key) ?? []), entry]);
    }
    for (const [id, group] of groups) {
      for (const locale of locales) {
        const matches = group.filter((entry) => entry.data.locale === locale);
        if (matches.length !== 1) errors.push(`${String(idKey)}=${id}: expected one ${locale} translation, found ${matches.length}`);
      }
      for (const field of shared) {
        if (group.some((entry) => JSON.stringify(entry.data[field]) !== JSON.stringify(group[0].data[field]))) {
          errors.push(`${String(idKey)}=${id}: shared field ${String(field)} disagrees (${group.map((entry) => entry.file).join(', ')})`);
        }
      }
    }
  }
  pairs(apps, 'appId', sharedAppFields);
  for (const entry of apps) {
    const translation = apps.find((other) => other.data.appId === entry.data.appId && other.data.locale !== entry.data.locale);
    if (translation && Boolean(entry.data.usageNote) !== Boolean(translation.data.usageNote)) {
      errors.push(`${entry.file}: usageNote translation is missing for appId=${entry.data.appId}`);
    }
  }
  pairs(updates, 'updateId', ['updateId', 'appId', 'date']);
  const slugs = new Set<string>();
  for (const entry of apps) {
    const key = `${entry.data.locale}/${entry.data.slug}`;
    if (slugs.has(key)) errors.push(`${entry.file}: duplicate slug ${key}`);
    slugs.add(key);
  }
  const appKeys = new Set(apps.map((entry) => `${entry.data.locale}/${entry.data.appId}`));
  for (const entry of updates) {
    if (!appKeys.has(`${entry.data.locale}/${entry.data.appId}`)) errors.push(`${entry.file}: missing app ${entry.data.appId} in ${entry.data.locale}`);
  }
  return errors;
}
