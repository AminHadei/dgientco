---
name: doc-authoring
description: Use when writing developer docs. Single source of truth, current-reality only.
---

# Doc authoring — dgientco

## Principles

1. One source of truth. Skills point at it; they do not restate it.
2. Current reality only.
3. Terse: tables and bullets.
4. Site copy stays Persian in `content/`, `data/`, and pages. Developer docs, skills, and `CHANGELOG.md` stay English.

## After adding a doc

- Link it from `AGENTS.md` if agents must find it.
- Add a skill pointer only if agents must follow it while working.

## Don't

- Don't duplicate `AGENTS.md` or an existing skill.
- Don't put Persian page copy in developer docs.
