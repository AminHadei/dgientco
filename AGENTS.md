# AGENTS.md — dgientco

Orientation for coding agents on the static site of **dgientco**.

Claude Code reads `CLAUDE.md`, which points here. Other agents read this file directly.

## Project snapshot

| Item     | Value                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------- |
| Stack    | Nuxt 4, Vue 3, TypeScript, Tailwind CSS 3 (`@nuxtjs/tailwindcss`)                                 |
| Content  | `@nuxt/content` for news and projects. Partners, management, and contact live in `app/data/*.ts`. |
| Images   | `AppImage`, with width, height, and lazy loading                                                  |
| Output   | Static only — `pnpm generate` → `.output/public`                                                  |
| Language | Persian, `dir="rtl"`, `lang="fa"`                                                                 |
| App dir  | `app/` (`pages/`, `components/`, `composables/`, `layouts/`, `data/`)                             |
| Content  | `content/` and `content.config.ts`                                                                |
| Dev      | `pnpm dev`                                                                                        |
| Package  | pnpm. Checks: `pnpm check`, `pnpm test`. Changelog: Changesets                                    |

**Hard constraint:** production is a static host. Prerender every route. Do not add runtime server routes for content that belongs in `content/` or `app/data/`. `server/routes/sitemap.xml.ts`, `server/routes/robots.txt.ts`, and `server/routes/site.webmanifest.ts` are the exceptions.

The public site URL is `NUXT_PUBLIC_SITE_URL` (default `https://aminhadei.github.io/dgientco` in `app/utils/site.ts`, no trailing slash). Page paths are appended to it. `NUXT_APP_BASE_URL` stays `/dgientco/` for GitHub Pages. For a custom domain served at `/`, change both.

Tests live in `tests/`. `pnpm test:unit` is Vitest. `pnpm test:e2e` is Playwright (Chromium) against a generated site served under `/dgientco/`. See the README for the commands.

[docs/ROADMAP.md](docs/ROADMAP.md) is the launch checklist for the real deployment. Do not treat it as current work.

## Design

Campus layout, mirrored for RTL. Tokens and component rules are in the `design-system` skill: Vazirmatn, the logo mark on a light plate, a start-aligned gradient hero, and a glass stats bar.

## Skills (load on demand)

Canonical: [`.agents/skills/`](./.agents/skills/). Claude shims: [`.claude/skills/`](./.claude/skills/).

| Skill              | When                                    |
| ------------------ | --------------------------------------- |
| `nuxt-app`         | Pages, components, composables, Vue/TS  |
| `design-system`    | Layout, type, colour, RTL               |
| `content-fa`       | Persian copy, `content/`, and `data/`   |
| `static-deploy`    | Generate, GitHub Actions, prerender     |
| `code-conventions` | Cross-cutting Vue/TS and tooling        |
| `git-conventions`  | Commits, branches, hooks                |
| `pre-commit`       | Verification before declaring work done |
| `changesets`       | Changelog, version, `.changeset/`       |
| `code-review`      | PR / diff review via `REVIEW.md`        |
| `doc-authoring`    | Developer docs                          |

## Agent rules

1. **Never `--no-verify`.** Fix hook failures at the root cause.
2. **Never commit without user confirmation.**
3. **Reversible local work** — proceed. **Destructive or remote** — confirm first.
4. **Simplicity and surgical scope.** Minimum diff; match existing style.
5. **Do not hand-edit `CHANGELOG.md` or `version`.** Use `pnpm changeset`.
6. **Verify site work** with `pnpm check` and `pnpm test:unit`. Run `pnpm generate` and `pnpm test:e2e` when routes, content, or `nuxt.config.ts` change. Generate with `NUXT_APP_BASE_URL=/dgientco/` before the end-to-end tests.
