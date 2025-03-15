// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import { ViteToml } from 'vite-plugin-toml';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://bestmeditationapps.com",
  integrations: [
    vue(),
    mdx(),
    icon(),
    sitemap()
  ],
  vite: {
    plugins: [tailwindcss(), ViteToml()]
  }
});