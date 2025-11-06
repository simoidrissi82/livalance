import {z} from 'zod';

export const articleFrontmatterSchema = z.object({
  locale: z.enum(['de', 'en']),
  title: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  category: z.string(),
  tags: z.array(z.string()).default([]),
  readingTime: z.number(),
  author: z.string(),
  published: z.boolean().default(false),
  publishDate: z.string().transform((value) => new Date(value)),
  cover: z.string(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional()
});

export type ArticleFrontmatter = z.infer<typeof articleFrontmatterSchema>;
