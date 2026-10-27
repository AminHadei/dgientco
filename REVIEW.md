# REVIEW.md — dgientco

Severity calibration for code review. Used by the `code-review` skill.

## Blocker

- `pnpm generate` fails, or a linked route is missing from `.output/public`.
- A new runtime dependency on a Node server for content that can live in `content/` or `data/`.
- RTL regressions: physical `left` / `right` / `ml` / `mr` / `pl` / `pr` where logical properties are required.
- `html` `lang` or `dir` no longer `fa` / `rtl`.
- A link to a route that does not exist.

## Major

- Colours or type outside the campus tokens in `tailwind.config.ts` and `assets/css/main.css`.
- A page without `usePageSeo`.
- Dates shown in Gregorian form or with Latin digits.
- `CHANGELOG.md` or `package.json` `version` edited by hand.
- Images missing width and height, or a new raster that is not WebP.

## Minor

- Missing Jalali formatting for a new date field.
- Inconsistent section rhythm against the homepage.
- A new dependency for something the current stack already covers.

## Nit

- Import order, naming, or comment wording.
- Copy polish that does not change meaning.
