import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Change `site` to your final address (e.g. https://yourname.github.io or https://yourname.it)
export default defineConfig({
  site: 'https://hibigeye.com',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
