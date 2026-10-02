import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { appSchema, updateSchema } from './lib/schema';

export const collections = {
  // Never let frontmatter.slug become the collection ID: both languages share it.
  apps: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/apps', generateId: ({ entry }) => entry.replace(/\.md$/, '') }), schema: appSchema }),
  updates: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/updates', generateId: ({ entry }) => entry.replace(/\.md$/, '') }), schema: updateSchema }),
};
