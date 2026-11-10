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
    '# /thank-you is the landing page for a form post and carries noindex.',
    'Disallow: /thank-you',
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
