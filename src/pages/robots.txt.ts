import type { APIContext } from 'astro';

/**
 * Generated rather than a static file in public/, so the Sitemap line follows
 * SITE_URL when a custom domain is pointed at the site instead of silently
 * pointing crawlers back at the netlify.app origin.
 */
export function GET({ site }: APIContext) {
  const origin = site!.href.replace(/\/$/, '');

  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    '# Nothing is disallowed here on purpose. /thank-you must stay crawlable:',
    '# it carries a noindex meta tag and an X-Robots-Tag header, and a crawler',
    '# that is blocked from fetching it can never read either, which is how a',
    '# disallowed URL ends up indexed with no snippet instead of dropped.',
    '',
    `Sitemap: ${origin}/sitemap-index.xml`,
    '',
    '# Plain-text summaries of this site, for language models.',
    `# ${origin}/llms.txt`,
    `# ${origin}/llms-full.txt`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
}
