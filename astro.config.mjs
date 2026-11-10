import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed to a netlify.app subdomain for review. When advrt.co.uk is pointed
// at this site, change SITE to 'https://www.advrt.co.uk' — it drives canonical
// URLs, OG tags, the sitemap and the RSS feed.
const SITE = process.env.SITE_URL ?? 'https://advrt-site.netlify.app';

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
