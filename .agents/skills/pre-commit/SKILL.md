---
name: pre-commit
description: Use before declaring work done, or when a Husky hook fails. Runs the check pipeline and generate when the site changed.
---

# Pre-commit — dgientco

```bash
pnpm check
```

`check` is typecheck, lint, Prettier `--check`, and cspell.

If lint or format failed on something auto-fixable:

```bash
pnpm check:fix
```

Also run `pnpm test:unit`.

Also run `pnpm generate` when the change touches `app/`, `content/`, `content.config.ts`, `nuxt.config.ts`, or `.github/workflows/`. Use `NUXT_APP_BASE_URL=/dgientco/`, then `pnpm links` and `pnpm test:e2e`.

`pre-push` runs `pnpm typecheck` and `pnpm test:unit`. Do not add the end-to-end suite to `pre-commit`.

## Report

List each step as pass or fail with the error snippet. Do not commit unless the user asks.

## Don't

- Don't use `--no-verify`.
- Don't skip `generate` for route, content, or config changes.
- Don't hand-edit `CHANGELOG.md`. Add a changeset for user-visible work (`changesets` skill).
