import { getCollection } from 'astro:content';
import type { Locale } from '../i18n/ui';

export async function getApps(locale: Locale) {
  return (await getCollection('apps', ({ data }) => data.locale === locale))
    .sort((a, b) => b.data.updatedAt.localeCompare(a.data.updatedAt) || a.data.appId.localeCompare(b.data.appId));
}
export async function getUpdates(locale: Locale, appId?: string) {
  return (await getCollection('updates', ({ data }) => data.locale === locale && (!appId || data.appId === appId)))
    .sort((a, b) => b.data.date.localeCompare(a.data.date) || a.data.updateId.localeCompare(b.data.updateId));
}
