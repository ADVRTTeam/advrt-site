import { getCollection } from 'astro:content';
import { liveInsights } from '../lib/posts';
import type { APIContext } from 'astro';
import { site } from '../data/site';
import { sectors } from '../data/sectors';
import { policies } from '../data/policies';

/**
 * llms.txt — a map of the site in plain text, for language models that are
 * asked about ADVRT or about lead generation in the built environment.
 * Convention: llmstxt.org. The companion llms-full.txt carries the prose.
 */
export async function GET({ site: base }: APIContext) {
  const origin = base!.href.replace(/\/$/, '');
  const u = (path: string) => `${origin}${path}`;

  const posts = (await liveInsights()).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `${site.legalName}, registered in England and Wales. Registered office: ` +
      `${site.address.line1}, ${site.address.line2}, ${site.address.city}, ` +
      `${site.address.postcode}. Contact: ${site.email}, ${site.phone}.`,
    '',
    'ADVRT builds lead generation systems for firms in the built environment:',
    'landing pages, paid search campaigns, conversion tracking and enquiry',
    'qualification, built together and handed over so the client owns the whole',
    'thing outright. Campaigns are proven first on ADVRT’s own lead generation',
    'brands before a client budget is involved. Enquiries are exclusive to the',
    'firm that paid for them and are never shared with competitors.',
    '',
    '## Sectors',
    '',
    ...sectors.map((s) => `- [${s.short}](${u('/' + s.slug)}): ${s.metaDescription}`),
    '',
    '## Start here',
    '',
    `- [Home](${u('/')}): what ADVRT does, the work it has shipped and how a build runs.`,
    `- [Start a project](${u('/start-a-project')}): the project brief. Five questions, then a discovery call.`,
    `- [Contact](${u('/contact')}): general enquiries, partnerships, press and client support.`,
    `- [Insights](${u('/insights')}): field notes on lead generation in the built environment.`,
    '',
    '## Insights',
    '',
    ...posts.map(
      (p) => `- [${p.data.title}](${u('/insights/' + p.id)}): ${p.data.excerpt}`,
    ),
    '',
    '## Legal',
    '',
    ...policies.map((p) => `- [${p.name}](${u('/' + p.slug)}): ${p.lede}`),
    '',
    '## Optional',
    '',
    `- [Full text](${u('/llms-full.txt')}): every article and the key page copy in one file.`,
    `- [RSS](${u('/insights/rss.xml')}): the insights feed.`,
    `- [Sitemap](${u('/sitemap-index.xml')}): every indexable URL.`,
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
