# dgientco

Static corporate website for فناوری‌های نوین صنعت و انرژی دانش‌گستر. The public short name is فنصاد. DGIENT is the Latin mark on the logo. The site is written in Persian and laid out right to left.

## Stack

- **Nuxt 4** for a statically generated Vue site
- **Tailwind CSS** with logical properties for RTL layout
- **Nuxt Content** for news and projects
- **Vazirmatn** for Persian typography
- Jalali dates rendered with Persian digits

## Pages

- `/` home: hero, project counts, projects, partners, managers, and news
- `/projects` current and upcoming projects
- `/about` mission, managers, and partners
- `/news` and `/news/[slug]`
- `/contact`
- Custom 404 page

## Design

The layout follows a campus-site pattern, mirrored for RTL: a start-aligned hero with a gradient title and a glass stats bar. The header uses the logo mark on a light plate, compact uppercase navigation, and a contact button. Sections use a tight rhythm and rounded buttons. The footer shows the full logo, the contact details, and a legal bar.

## Quality

- Resized WebP images with explicit width and height, lazy-loaded below the fold
- Per-page title, description, canonical URL, Open Graph, and Twitter cards
- JSON-LD for the organization, the website, news articles, and breadcrumbs
- Sitemap, `robots.txt`, favicons, and a web manifest
- Self-hosted Vazirmatn files with `font-display: swap` and unicode-range subsets
- Static generation and an internal link check in GitHub Actions

## Site URL

Public URLs (canonical, Open Graph, sitemap, `robots.txt`) use `NUXT_PUBLIC_SITE_URL`. The default is `https://aminhadei.github.io/dgientco` in `app/utils/site.ts`, with no trailing slash. The GitHub Pages prefix stays in `NUXT_APP_BASE_URL` (`/dgientco/` in CI and deploy).

To move the site to a custom domain at the root of that domain, set both values for `pnpm generate`:

```bash
NUXT_PUBLIC_SITE_URL=https://example.com NUXT_APP_BASE_URL=/ pnpm generate
```

Image sources are listed in [CREDITS.md](CREDITS.md).

## Develop

Requires Node.js 22 (see `.nvmrc`) and pnpm 10.

```bash
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:3000`.

```bash
pnpm generate
pnpm preview
pnpm check
```

`pnpm generate` writes the static site to `.output/public`. GitHub Pages builds that output with `NUXT_APP_BASE_URL=/dgientco/`.

## Tests

```bash
pnpm test:unit
NUXT_APP_BASE_URL=/dgientco/ pnpm generate
pnpm test:e2e
pnpm test
```

`pnpm test:unit` runs Vitest: Node tests for Jalali dates, site URLs, and related helpers, plus component tests that need the Nuxt runtime. `pnpm test:e2e` runs Playwright in Chromium against `.output/public`, served under `/dgientco/`. Generate with that base URL first. `pnpm test` runs both. `pre-push` runs the unit tests. End-to-end tests stay out of the git hooks and run in CI after generate.

## Future work

[docs/ROADMAP.md](docs/ROADMAP.md) is the checklist for the real deployment: domain and DNS, a VPS, and approved content. Those tasks wait until that deployment is actually happening.

## Layout

```
.
├── app/             # Pages, components, data, and CSS
├── content/         # News and projects
├── public/          # Fonts, images, and static files
├── server/          # Sitemap, robots, and web manifest
├── content.config.ts
└── nuxt.config.ts
```

## License

All rights reserved by dgientco.
