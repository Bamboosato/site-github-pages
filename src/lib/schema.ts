import { z } from 'zod';

const identifier = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use a lowercase URL-safe identifier');
const date = z.preprocess(
  // Astro's YAML reader parses unquoted dates as Date; our YAML reader keeps strings.
  (value) => value instanceof Date && !Number.isNaN(value.valueOf()) ? value.toISOString().slice(0, 10) : value,
  z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine((value) => {
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.valueOf()) && parsed.toISOString().slice(0, 10) === value;
  }, 'Use a real calendar date (YYYY-MM-DD)'),
);
const webUrl = z.url({ protocol: /^https?$/ });
const imagePath = z.string().regex(/^\/(?!\/)(?!.*(?:\.\.|[?#]))[^\s]+$/, 'Use a site-relative public image path');
const screenshot = z.object({ src: imagePath, alt: z.string().trim().min(1) });

export const appSchema = z.object({
  appId: identifier, locale: z.enum(['ja', 'en']), title: z.string().trim().min(1),
  slug: identifier, category: identifier, description: z.string().trim().min(1),
  appUrl: webUrl.optional(), githubUrl: webUrl.optional(),
  createdAt: date.optional(), updatedAt: date,
  status: z.enum(['active', 'experimental', 'maintenance', 'archived']),
  tags: z.array(z.string().trim().min(1)), featured: z.boolean(),
  sample: z.boolean().default(false),
  thumbnail: screenshot.optional(), screenshots: z.array(screenshot).optional(),
  version: z.string().optional(), license: z.string().optional(),
}).refine((data) => !data.createdAt || data.createdAt <= data.updatedAt, {
  message: 'createdAt must not be later than updatedAt', path: ['createdAt'],
});
export const updateSchema = z.object({
  updateId: identifier, appId: identifier, locale: z.enum(['ja', 'en']),
  date, title: z.string().trim().min(1),
});
export type AppData = z.infer<typeof appSchema>;
export type UpdateData = z.infer<typeof updateSchema>;
