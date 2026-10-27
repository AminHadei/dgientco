import { withBase } from "./utils/withBase";

const baseURL = process.env.NUXT_APP_BASE_URL || "/";

// Root-absolute font urls are not prefixed by Vite. Apply app.baseURL once here.
function prefixPublicFontUrls() {
  return {
    name: "prefix-public-font-urls",
    enforce: "pre" as const,
    transform(code: string, id: string) {
      if (!id.includes(".css") || !code.includes("/fonts/")) return;
      return code.replace(
        /url\(\s*(['"]?)(\/fonts\/[^'")\s]+)\1\s*\)/g,
        (_match, _quote, path: string) => {
          return `url("${withBase(baseURL, path)}")`;
        },
      );
    },
  };
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-10-27",

  ssr: true,

  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@nuxt/content"],

  eslint: {
    config: {
      stylistic: false,
    },
  },

  content: {
    documentDriven: false,
    markdown: {
      anchorLinks: false,
    },
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [prefixPublicFontUrls()],
  },

  app: {
    baseURL,
    head: {
      htmlAttrs: {
        lang: "fa",
        dir: "rtl",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "دجینت‌کو - بزرگترین پردیس استارت‌آپی خاورمیانه",
      meta: [
        {
          name: "description",
          content:
            "دجینت‌کو به بیش از ۱۰۰۰ استارت‌آپ دسترسی به اکوسیستم، شرکا و سرمایه‌گذاران می‌دهد.",
        },
        { name: "theme-color", content: "#1c1917" },
        { property: "og:site_name", content: "دجینت‌کو" },
        { property: "og:locale", content: "fa_IR" },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: withBase(baseURL, "/favicon.svg") },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: withBase(baseURL, "/fonts/vazirmatn-arabic-400-normal.woff2"),
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: withBase(baseURL, "/fonts/vazirmatn-arabic-900-normal.woff2"),
          crossorigin: "anonymous",
        },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        "/",
        "/about",
        "/news",
        "/contact",
        "/contact/visits",
        "/contact/sales",
        "/contact/press",
        "/legal-information",
        "/privacy-policy",
        "/terms",
        "/startups",
        "/sitemap.xml",
      ],
    },
  },

  devtools: { enabled: false },
});
