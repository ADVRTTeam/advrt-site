import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    /** Short <title> for search results; falls back to `title`. */
    metaTitle: z.string().optional(),
    /** Shown on the card and used as the meta description. */
    excerpt: z.string(),
    /** Filter chip on the index, e.g. "Strategy". */
    topic: z.string(),
    /** Breadcrumb chip on the article, e.g. "Surveyors · Strategy". */
    crumb: z.string().optional(),
    date: z.coerce.date(),
    /** Reading time in minutes, as shown in the design. */
    mins: z.number().int().positive(),
    /** Author key from src/data/authors.ts. A display name still resolves. */
    author: z.string().default('jack'),
    /** One article is pulled out as the index's featured card. */
    featured: z.boolean().default(false),
    /** Big word on the featured card's cover, e.g. "Cost per job". */
    coverWord: z.string().optional(),
    /** Bulleted summary rendered above the article body. */
    takeaways: z.array(z.string()).default([]),
    /** Sector slugs this article is relevant to; renders a related-services
        block and gives the sector pages inbound links from the blog. */
    sectors: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights };
