import type { Locale } from '../i18n/ui.ts';

export function normalizeBase(base: string): string {
  return `/${base.split('/').filter(Boolean).join('/')}`.replace(/\/$/, '');
}
export function withBase(path: string, base: string): string {
  return `${normalizeBase(base)}/${path.replace(/^\/+/, '')}`;
}
export function pagePath(locale: Locale, path = ''): string {
  return `/${locale === 'en' ? 'en/' : ''}${path.replace(/^\/+/, '')}`;
}
