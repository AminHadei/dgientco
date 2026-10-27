import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { withBase } from "./app/utils/withBase";
import {
  defaultDescription,
  defaultSiteUrl,
  siteLocale,
  siteName,
  themeColor,
} from "./app/utils/site";
import { publicPaths } from "./server/utils/publicRoutes";

const baseURL = process.env.NUXT_APP_BASE_URL || "/";
const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || defaultSiteUrl).replace(
  /\/+$/,
  "",
);

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

function walkHtml(dir: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) files.push(...walkHtml(path));
    else if (entry.endsWith(".html")) files.push(path);
  }
  return files;
}

// GitHub Pages serves a client-only 404 shell, so the page SEO composable
// never runs for that document. Patch the title and robots tag after prerender.
// `nuxt prepare` (the install postinstall) also closes Nitro, before generate
// has created this directory.
function finalizeHtml() {
  const root = join(process.cwd(), ".output/public");
  try {
    if (!statSync(root).isDirectory()) return;
  } catch {
    return;
  }
  for (const file of walkHtml(root)) {
    let html = readFileSync(file, "utf8");
    if (file.endsWith(`${join("public", "404.html")}`) || file.endsWith("/404.html")) {
      html = html
        .replace(/<title>[^<]*<\/title>/, `<title>صفحه پیدا نشد | ${siteName}</title>`)
        .replace(
          "</head>",
          '<meta name="robots" content="noindex, nofollow"><meta name="description" content="صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است."></head>',
        );
    }
    writeFileSync(file, html);
  }
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-10-27",

  ssr: true,

  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@nuxt/content"],

  eslint: {
    config: {
      stylistic: false,
    },
  },

  content: {
    renderer: {
      anchorLinks: false,
    },
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [prefixPublicFontUrls()],
    build: {
      modulePreload: false,
    },
  },

  postcss: {
    plugins: {
      // Tailwind 3 exposes nesting only as a directory import, which Nuxt cannot load as ESM.
      "tailwindcss/nesting": false,
    },
  },

  runtimeConfig: {
    public: {
      siteUrl,
      siteName,
      siteDescription: defaultDescription,
      siteLocale,
    },
  },

  experimental: {
    defaults: {
      nuxtLink: {
        prefetch: false,
      },
    },
  },

  hooks: {
    "nitro:init"(nitro) {
      nitro.hooks.hook("close", () => {
        finalizeHtml();
      });
    },
    "build:manifest": (manifest) => {
      for (const key of Object.keys(manifest)) {
        const item = manifest[key];
        if (!item) continue;
        item.dynamicImports = [];
        item.preload = false;
        item.prefetch = false;
      }
    },
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
      title: siteName,
      // usePageSeo applies the "Page | site name" template and sets this to %s.
      titleTemplate: "%s",
      meta: [
        {
          name: "description",
          content: defaultDescription,
        },
        { name: "theme-color", content: themeColor },
        { property: "og:site_name", content: siteName },
        { property: "og:locale", content: siteLocale },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: withBase(baseURL, "/favicon.svg") },
        { rel: "icon", href: withBase(baseURL, "/favicon.ico"), sizes: "32x32" },
        {
          rel: "apple-touch-icon",
          href: withBase(baseURL, "/apple-touch-icon.png"),
          sizes: "180x180",
        },
        { rel: "manifest", href: withBase(baseURL, "/site.webmanifest") },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [...publicPaths(), "/sitemap.xml", "/robots.txt", "/site.webmanifest"],
    },
  },

  devtools: { enabled: false },
});
