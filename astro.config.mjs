import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import { siteConfig } from './src/config/site.ts';
import rehypeBase from './src/lib/rehype-base.mjs';

export default defineConfig({
  site: process.env.SITE_URL || siteConfig.site,
  base: process.env.SITE_BASE || siteConfig.base,
  output: 'static',
  trailingSlash: 'always',
  markdown: { processor: unified({ rehypePlugins: [[rehypeBase, { base: process.env.SITE_BASE || siteConfig.base }]] }) },
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
    routing: { prefixDefaultLocale: false },
  },
});
