---
name: nuxt-app
description: Use when editing pages, components, composables, layouts, or nuxt.config.ts. Covers Nuxt 3, Vue 3, and script setup.
---

# Nuxt app — dgientco

## Layout

```
pages/              # file routes
components/         # auto-imported
composables/        # auto-imported use*
layouts/
utils/
data/               # typed lists
content/            # news and legal markdown
assets/css/
server/routes/      # sitemap only
nuxt.config.ts
```

## Vue / TypeScript

- `<script setup lang="ts">` only.
- Typed props via `defineProps<{ ... }>()`.
- No `any`. Narrow `unknown` at boundaries.
- Named exports in composables and utils.

## Data

- News and legal pages use `queryContent`.
- Lists that are not markdown live in `data/*.ts`.
- Images go through `AppImage`.
- Every page calls `usePageSeo` (Persian title, description, `ogLocale: fa_IR`).

## Config

- `app.head.htmlAttrs` stays `{ lang: 'fa', dir: 'rtl' }`.
- Static output is `nuxt generate` (`nitro.prerender.crawlLinks` plus the explicit route list).
- New routes must be linked from a crawled page and added to `nuxt.config.ts` and `server/routes/sitemap.xml.ts`.

## Don't

- Don't add server routes for content that belongs in `content/` or `data/`.
- Don't introduce a UI kit for layout this site already builds with Tailwind.
