import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import typst from 'astro-typst';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://breakinglead.github.io',
  base: '/',
  integrations: [mdx(), sitemap(), react(), tailwind({
    applyBaseStyles: false,
  })]
});