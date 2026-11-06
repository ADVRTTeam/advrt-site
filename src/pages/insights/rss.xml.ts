import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '../../data/site';

export async function GET(context: APIContext) {
  const posts = (await getCollection('insights', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: `${site.name} — Insights`,
    description:
      'What we learn running our own lead generation brands, written up for firms in the built environment.',
    site: context.site!,
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `/insights/${post.id}`,
      categories: [post.data.topic],
      author: `${site.email} (${post.data.author})`,
    })),
    customData: '<language>en-gb</language>',
  });
}
