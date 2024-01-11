import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import preact from "@astrojs/preact";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://dezoblog.netlify.app/',
  integrations: [mdx(), sitemap(), preact(), svelte()]
});