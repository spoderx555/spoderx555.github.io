// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import expressiveCode from "astro-expressive-code";
import defineEcConfig from "./src/site.config.ts";
import tailwindcss from "@tailwindcss/vite";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const LIVE_URL = "https://spoderx555.github.io";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
  site: LIVE_URL,
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            ariaHidden: true,
            tabIndex: -1,
            class: "heading-anchor",
          },
        },
      ],
    ],
  },
  // @ts-ignore
  integrations: [expressiveCode(defineEcConfig), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    css: {
      transformer: "postcss",
    },
  },
  fonts: [
    {
      name: "JetBrains Mono",
      cssVariable: "--jetbrains-mono",
      provider: fontProviders.fontsource(),
      fallbacks: ["monospace"],
      weights: [400, 500, 700],
      styles: ["normal", "italic"],
    },
  ],
});
