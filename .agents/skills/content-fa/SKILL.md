---
name: content-fa
description: Use when writing or editing Persian copy in content/ or app/data/. Covers voice, orthography, and Jalali dates.
---

# Persian content — dgientco

## Where copy lives

| Kind       | Path                     | Role                              |
| ---------- | ------------------------ | --------------------------------- |
| News       | `content/news/*.md`      | Articles                          |
| Legal      | `content/legal/*.md`     | Legal information, privacy, terms |
| Projects   | `content/projects/*.yml` | Current and upcoming projects     |
| Partners   | `app/data/partners.ts`   | Organization partners             |
| Management | `app/data/management.ts` | Board and managers                |
| Contact    | `app/data/contact.ts`    | Address, phone, email, messengers |

Interface strings that are not in those files are written in the Vue page, in Persian. Contact details live on the contact page.

## Voice

The company speaks calmly and specifically. Do not invent facts, numbers, or people. The short name is فنصاد. The legal name with «سهامی خاص» appears only on the legal line, the legal pages, and `legalName`.

## Orthography

- ZWNJ where Persian requires it: «می‌شود», «نسخه‌ها».
- Persian quotation marks «…».
- Store dates as ISO `YYYY-MM-DD`. Display them with `formatJalaliDate` (Jalali, Persian digits).
- Do not put Persian digits in frontmatter dates.

## Slugs

Latin kebab-case filenames under `content/news/`.
