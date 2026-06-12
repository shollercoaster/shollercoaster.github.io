import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Category drives the colored tag on cards and the filter on the blog index.
    category: z.enum(['ai-safety', 'research', 'productivity', 'personal']),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    // Optional cover image, path relative to /public, e.g. /images/blog/my-post/cover.png
    coverImage: z.string().optional(),
  }),
});

const now = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/now' }),
  schema: z.object({
    title: z.string(),
    // e.g. "2026-06" for a monthly entry, or "2026" for a yearly summary
    period: z.string(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = { blog, now };
