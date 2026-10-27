# dgientco

Static corporate website for dgientco, a digital technology and innovation company. The site is written in Persian and laid out right to left.

## Stack

- **Nuxt 4** for a statically generated Vue site
- **Tailwind CSS** with logical properties for RTL layout
- **Nuxt Content** for news articles and legal pages
- **Embla Carousel** with RTL support
- **Vazirmatn** for Persian typography
- Jalali dates rendered with Persian digits

## Pages

- `/` home: hero, stats, startup logos, partners, and news
- `/startups` startup profiles
- `/about` timeline and founding principles
- `/news` and `/news/[slug]`
- `/contact`, `/contact/visits`, `/contact/sales`, and `/contact/press`
- `/legal-information`, `/privacy-policy`, and `/terms`
- Custom 404 page

## Design

The layout follows a campus-site pattern, mirrored for RTL: a start-aligned hero with a gradient title, one white pill button, and a glass stats bar. The header uses a wordmark, compact uppercase navigation, and a contact pill. Sections use a tight rhythm, pill buttons, and a footer with link columns, a newsletter field, and a legal bar.

## Quality

- Resized WebP images with explicit width and height, lazy-loaded below the fold
- Per-page title, description, and Open Graph tags
- Sitemap, `robots.txt`, and a favicon
- Self-hosted font files, with the weights used in the hero preloaded
- Static generation checked in GitHub Actions on pull requests

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

## Layout

```
.
├── app/             # Pages, components, data, and CSS
├── content/         # Markdown news and legal pages
├── public/          # Fonts, images, and static files
├── server/          # Sitemap route
├── content.config.ts
└── nuxt.config.ts
```

## License

All rights reserved by dgientco.
