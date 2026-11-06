import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed to a netlify.app subdomain for review. When advrt.co.uk is pointed
// at this site, change SITE to 'https://www.advrt.co.uk' — it drives canonical
// URLs, OG tags, the sitemap and the RSS feed.
const SITE = process.env.SITE_URL ?? 'https://advrt-site.netlify.app';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'ignore',
  compressHTML: true,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
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
