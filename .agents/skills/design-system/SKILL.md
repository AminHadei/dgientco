---
name: design-system
description: Use when changing layout, spacing, typography, colour, or component appearance. RTL campus layout for dgientco.
---

# Design system — dgientco

## Tokens

Defined in `tailwind.config.ts` and `assets/css/main.css`.

| Token                | Value     | Role                      |
| -------------------- | --------- | ------------------------- |
| `primary`            | `#1c1917` | Header, footer, dark text |
| `primary-foreground` | `#fafaf9` | Text on primary           |
| `foreground`         | `#0c0a09` | Body text                 |
| `muted`              | `#f5f5f4` | Panels and quiet fills    |
| `muted-foreground`   | `#79716b` | Secondary text            |
| `border`             | `#e7e5e4` | Hairlines                 |
| `accent-blue`        | `#024a70` | Focus ring and emphasis   |
| `accent-blue-light`  | `#eff6ff` | Soft blue fill            |
| `accent-orange`      | `#fff7ed` | Soft warm fill            |

- Type: Vazirmatn (`font-sans`, `font-display`). Files are in `public/fonts/` and declared in `assets/css/fonts.css`.
- Buttons: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-light` are pills (`rounded-full`).
- Page titles: `.page-title`. Section titles: `.section-title`.
- Container: `max-w-7xl`. Section rhythm: `py-8`.

## Hero

Start-aligned on large screens, centered below `lg`. The `h1` uses `.hero-gradient` (green at the start). One white `.btn-light`. Stats sit in a glass bar: `rounded-xl border border-white/40 bg-white/20 backdrop-blur-md`.

## Header and footer

Fixed `h-24` bar, wordmark, compact uppercase nav, contact as a white pill. The footer is divided columns, a newsletter field, and a legal bar.

## RTL

Logical properties only: `ms`/`me`, `ps`/`pe`, `start`/`end`, `text-start`. Never `left`/`right`, `ml`/`mr`, `pl`/`pr`, `text-left`/`text-right`.

The hero gradient runs `to left` so the green stop sits on the start edge in RTL.

## Homepage shape

Hero, startup logo carousel, feature cards, partner names, news. Do not add a programs or events block.
