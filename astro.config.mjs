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
      "Content-Security-Policy":
        "default-src 'self'; script-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; require-trusted-types-for 'script';",
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
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Share Tech mono",
      cssVariable: "--font-tech-mono",
      fallbacks: ["monospace"],
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/share-tech-mono-latin-400-normal.woff"],
            weight: 400,
            style: "normal",
            display: "swap",
          },
          {
            src: ["./src/assets/fonts/share-tech-mono-latin-400-normal.woff2"],
            weight: 700,
            style: "normal",
            display: "swap",
          },
        ],
      },
    },
  ],
});
