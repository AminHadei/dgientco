# AGENTS.md — dgientco

Orientation for coding agents on the static site of **dgientco**.

Claude Code reads `CLAUDE.md`, which points here. Other agents read this file directly.

## Project snapshot

| Item     | Value                                                                 |
| -------- | --------------------------------------------------------------------- |
| Stack    | Nuxt 4, Vue 3, TypeScript, Tailwind CSS 3 (`@nuxtjs/tailwindcss`)     |
| Content  | `@nuxt/content` collections. Lists live in `app/data/*.ts`.           |
| Images   | `AppImage`, with width, height, and lazy loading                      |
| Output   | Static only — `pnpm generate` → `.output/public`                      |
| Language | Persian, `dir="rtl"`, `lang="fa"`                                     |
| App dir  | `app/` (`pages/`, `components/`, `composables/`, `layouts/`, `data/`) |
| Content  | `content/` and `content.config.ts`                                    |
| Dev      | `pnpm dev`                                                            |
| Package  | pnpm. Checks: `pnpm check`. Changelog: Changesets                     |

**Hard constraint:** production is a static host. Prerender every route. Do not add runtime server routes for content that belongs in `content/` or `app/data/`. `server/routes/sitemap.xml.ts` is the exception.

## Design

Campus layout, mirrored for RTL. Tokens and component rules are in the `design-system` skill: Vazirmatn, pill buttons, a start-aligned gradient hero, and a glass stats bar.

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
6. **Verify site work** with `pnpm check`. Run `pnpm generate` when routes, content, or `nuxt.config.ts` change.
