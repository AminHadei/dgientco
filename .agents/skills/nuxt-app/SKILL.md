---
name: nuxt-app
description: Use when editing app/pages, app/components, app/composables, app/layouts, or nuxt.config.ts. Covers Nuxt 4, Vue 3, and script setup.
---

# Nuxt app — dgientco

## Layout

```
app/
  app.vue
  error.vue
  pages/            # file routes
  components/       # auto-imported
  composables/      # auto-imported use*
  layouts/
  utils/
  data/             # typed lists
  assets/css/
content/            # news and legal markdown
content.config.ts
server/routes/      # sitemap only
nuxt.config.ts
```

## Vue / TypeScript

- `<script setup lang="ts">` only.
- Typed props via `defineProps<{ ... }>()`.
- No `any`. Narrow `unknown` at boundaries.
- Named exports in composables and utils.

## Data

- News and legal pages use `queryCollection` (`news` and `legal` in `content.config.ts`).
- Lists that are not markdown live in `app/data/*.ts`.
- Images go through `AppImage`.
- Every page calls `usePageSeo` (Persian title, description, `ogLocale: fa_IR`).

## Config

- `app.head.htmlAttrs` stays `{ lang: 'fa', dir: 'rtl' }`.
- Static output is `nuxt generate` (`nitro.prerender.crawlLinks` plus the explicit route list).
- New routes must be linked from a crawled page and added to `server/utils/publicRoutes.ts`. That list feeds prerender and `server/routes/sitemap.xml.ts`. News slugs are read from `content/news`.

## Tests

- `tests/unit/` — Node tests for `app/utils` and `server/utils`.
- `tests/nuxt/` — Vitest in the Nuxt environment for composables and components.
- `tests/e2e/` — Playwright against the generated site. Commands are in the README.

## Don't

- Don't add server routes for content that belongs in `content/` or `app/data/`.
- Don't introduce a UI kit for layout this site already builds with Tailwind.
