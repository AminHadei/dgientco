---
name: git-conventions
description: Use when creating branches, writing commit messages, or splitting work into commits. Conventional Commits, one logical change each.
---

# Git conventions — dgientco

## Commit format

```
<type>(<scope>): <subject>
```

- Subject: imperative, lowercase, no period, at most 72 characters, English.
- No body unless the user asks.
- No trailers. No `Co-authored-by` line of any kind.

## Types

| Type       | Use                         |
| ---------- | --------------------------- |
| `feat`     | Page, component, content    |
| `fix`      | Bug fix                     |
| `docs`     | Docs, agent skills          |
| `style`    | Formatting only             |
| `refactor` | Restructure, same behaviour |
| `chore`    | Tooling, dependencies       |
| `build`    | Build or deploy config      |

## Scopes

`pages`, `content`, `config`, `deploy`, `agents`, `public`, `docs`

## Branches

`feat/<short-desc>`, `fix/<short-desc>`, `chore/<short-desc>`

## Hooks

- `pre-commit`: lint-staged, `pnpm lint`, `pnpm spellcheck`
- `commit-msg`: commitlint, and any `Co-authored-by` line is removed
- `pre-push`: `pnpm typecheck`, `pnpm test:unit`

Never `--no-verify`. Never commit unless the user asks. Never force-push or amend a pushed commit without explicit approval. Do not change `git user.name` or `user.email`.

Author and committer for this repository are `Mr. Am!n <AminHadei@users.noreply.github.com>`.
