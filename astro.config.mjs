import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Live on advrt.co.uk since November 2026. This drives canonical URLs, OG
// tags, the sitemap, the RSS feed, robots.txt, llms.txt and every JSON-LD
// @id, so it has to be the domain people actually reach the site on.
//
// SITE_URL on the Netlify project overrides it. The fallback is the live
// domain rather than the netlify.app one on purpose: if the variable is ever
// lost, a build still canonicalises to the right host instead of quietly
// telling Google the real domain is a copy of the preview subdomain.
const SITE = process.env.SITE_URL ?? 'https://advrt.co.uk';

export default defineConfig({
  site: SITE,
  output: 'static',
  // Every link and canonical on this site is written without a trailing
  // slash. Netlify serves directory-style output at the slashed path and
  // 301s the bare one, so file-style output is what keeps those links from
  // all going through a redirect.
  trailingSlash: 'never',
  compressHTML: true,
  integrations: [
    sitemap({
      // /thank-you is noindex: it exists only as the landing page for a
      // no-JS form post, so it has no business in the sitemap.
      filter: (page) => !page.replace(/\/$/, '').endsWith('/thank-you'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
    // Emits /surveyors.html rather than /surveyors/index.html, which Netlify
    // then serves at /surveyors with no redirect.
    format: 'file',
  },
  image: {
    // Sharp resizes and re-encodes at build time; nothing is processed at runtime.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  vite: {
    build: {
      cssMinify: 'lightningcss',
      // Fail the build loudly rather than silently shipping a huge bundle.
      chunkSizeWarningLimit: 120,
    },
  },
});
