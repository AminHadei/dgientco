---
name: static-deploy
description: Use when changing static generation, GitHub Actions, prerender routes, or the production host. The site is static-only.
---

# Static deploy — dgientco

## Build

```bash
pnpm generate
# output: .output/public/
```

`nuxt generate` prerenders `/` and every linked route (`nitro.prerender.crawlLinks`, plus the explicit list in `nuxt.config.ts`). A page that is not linked will not be in the output unless it is listed there. News and legal markdown are queried with `queryCollection`, not served as their own routes.

## CI

| Workflow                        | When             | What                                                                                                |
| ------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------- |
| `.github/workflows/ci.yml`      | PR and push main | lint, format, spellcheck, typecheck, unit tests, generate, link check, Playwright, changeset on PRs |
| `.github/workflows/deploy.yml`  | push main        | generate and GitHub Pages                                                                           |
| `.github/workflows/release.yml` | manual           | `changeset version`, commit changelog                                                               |

Install in CI sets `HUSKY=0`.

## baseURL

GitHub Pages serves this project site at `/dgientco/`. CI and deploy set `NUXT_APP_BASE_URL=/dgientco/` for `pnpm generate`. `app.baseURL` reads that variable. Local dev stays at `/`. Change the workflow values and `nuxt.config.ts` together.

Stylesheet URLs written as root paths are not prefixed by Vite. `fonts.css` uses `/fonts/...`, and the Vite plugin in `nuxt.config.ts` applies `withBase` once so those urls pick up `NUXT_APP_BASE_URL`.

The public site URL comes from `NUXT_PUBLIC_SITE_URL`. The default is `https://aminhadei.github.io/dgientco` in `app/utils/site.ts` (no trailing slash). Canonical URLs, Open Graph URLs, the sitemap, and `robots.txt` all use that value plus the page path, so the `/dgientco` prefix is part of the site URL while `NUXT_APP_BASE_URL` is still `/dgientco/`. For a custom domain at the root, set `NUXT_PUBLIC_SITE_URL` to that origin and `NUXT_APP_BASE_URL` to `/`.

## Tests

`pnpm test:unit` does not need a generated site. The `build` CI job generates with `NUXT_APP_BASE_URL=/dgientco/`, runs `pnpm links`, then `pnpm test:e2e`. Playwright serves `.output/public` under that base and uses Chromium only. The browser cache key is the lockfile. Install steps set `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD` so the deploy job does not fetch browsers.

## Don't

- Don't add a Node runtime dependency for content.
- Don't switch the production command from `pnpm generate` to `nuxt build` without a server host.
