---
name: content-fa
description: Use when writing or editing Persian copy in content/ or data/. Covers voice, orthography, and Jalali dates.
---

# Persian content — dgientco

## Where copy lives

| Kind            | Path                             | Role                              |
| --------------- | -------------------------------- | --------------------------------- |
| News            | `content/news/*.md`              | Articles                          |
| Legal           | `content/legal/*.md`             | Legal information, privacy, terms |
| Startups        | `data/startups.ts`               | Startup cards and investors       |
| Home features   | `data/features.ts`               | Campus benefit cards              |
| Logos and stats | `data/logos.ts`, `data/stats.ts` | Partner names and hero stats      |
| Timeline        | `data/timeline.ts`               | About-page history                |
| Contact         | `data/contact-cards.ts`          | Contact hub cards                 |

Interface strings that are not in those files are written in the Vue page, in Persian.

## Voice

The company speaks as a campus: specific, calm, no hype. Copy is original Persian.

## Orthography

- ZWNJ where Persian requires it: «می‌شود», «نسخه‌ها».
- Persian quotation marks «…».
- Store dates as ISO `YYYY-MM-DD`. Display them with `formatJalaliDate` (Jalali, Persian digits).
- Do not put Persian digits in frontmatter dates.

## Slugs

Latin kebab-case filenames under `content/news/`.
