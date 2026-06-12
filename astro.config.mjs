// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://shollercoaster.github.io',
  // If deploying to a project page (YOUR_USERNAME.github.io/REPO_NAME),
  // uncomment the line below and replace REPO_NAME with your repo name.
  // If deploying to a "user site" repo named YOUR_USERNAME.github.io, leave commented.
  // base: '/REPO_NAME',
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
