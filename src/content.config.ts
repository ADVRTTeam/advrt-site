import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    /** Shown on the card and used as the meta description. */
    excerpt: z.string(),
    /** Filter chip on the index, e.g. "Strategy". */
    topic: z.string(),
    /** Breadcrumb chip on the article, e.g. "Surveyors · Strategy". */
    crumb: z.string().optional(),
    date: z.coerce.date(),
    /** Reading time in minutes, as shown in the design. */
    mins: z.number().int().positive(),
    author: z.string().default('Jack'),
    authorRole: z.string().default('Founder, ADVRT'),
    /** One article is pulled out as the index's featured card. */
    featured: z.boolean().default(false),
    /** Big word on the featured card's cover, e.g. "Cost per job". */
    coverWord: z.string().optional(),
    /** Bulleted summary rendered above the article body. */
    takeaways: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights };
