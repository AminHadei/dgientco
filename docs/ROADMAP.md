# Launch roadmap

Checklist for the real deployment. Do this work when a domain is registered, a VPS is available, and the approved content is ready to publish.

The site today is a static GitHub Pages build of `pnpm generate`. Public URLs use `NUXT_PUBLIC_SITE_URL` (default `https://aminhadei.github.io/dgientco`, no trailing slash, in `app/utils/site.ts`). The Pages prefix is `NUXT_APP_BASE_URL=/dgientco/` in CI and the deploy workflow. Canonical URLs, Open Graph URLs, the sitemap, and `robots.txt` are the site URL plus the page path.

The items below are tasks, not decisions already taken. Each note says why it matters and how to approach it. The company profile, projects, partners, managers, and contact details in the repo are the approved facts. News articles and the stock photographs are still placeholders.

## Domain and DNS

- [ ] Register the production domain and decide who controls DNS. The site URL cannot move until this exists.
- [ ] Choose the public host: apex (`example.com`) or `www`. Pick one canonical host so search engines do not index both.
- [ ] Point DNS at the VPS. Use `A` and `AAAA` records for an apex host. Use a `CNAME` for `www` when the provider allows it. Lower the TTL before the cutover so a mistake can be reverted quickly.
- [ ] Redirect the other host to the canonical one with a single hop (`www` to apex, or the reverse). Do this on the web server, after TLS works for both names.
- [ ] Set `NUXT_PUBLIC_SITE_URL` to `https://` plus the canonical host, with no trailing slash. Set `NUXT_APP_BASE_URL=/`. Regenerate. The `/dgientco` prefix then leaves the canonical URLs, the sitemap, `robots.txt`, and asset paths together.
- [ ] Update `.github/workflows/ci.yml` and `.github/workflows/deploy.yml` so the VPS build uses those values. A GitHub Pages build, if you keep one, must stay on `/dgientco/` and its own site URL. One generated tree cannot serve both hosts.
- [ ] Re-run `pnpm links` and `pnpm test:e2e` with the new base (`NUXT_APP_BASE_URL=/`) before the DNS switch. The e2e server reads that variable.

## Hosting on a VPS

- [ ] Serve `.output/public` as static files with nginx or Caddy. No Node process is required for the pages. `server/routes/` only exists so `nuxt generate` can emit the sitemap, `robots.txt`, and the web manifest.
- [ ] Turn on HTTPS with Let's Encrypt and automatic renewal. HTTP should redirect to HTTPS.
- [ ] Enable HTTP/2 and HTTP/3 if the server supports them. They reduce connection overhead for the font and image files.
- [ ] Enable gzip and brotli for HTML, CSS, JavaScript, SVG, and JSON. Leave images and fonts compressed as they are.
- [ ] Set cache headers. Hashed files under `/_nuxt/` can use a long `Cache-Control`. HTML should revalidate so a new deploy shows up.
- [ ] Add security headers: `Content-Security-Policy`, `Strict-Transport-Security` after HTTPS is stable, `X-Content-Type-Options`, `Referrer-Policy`, and a frame policy such as `frame-ancestors 'none'`. Start the CSP from the origins the pages actually load (self-hosted fonts and images) and tighten it after a check in the browser.
- [ ] Serve `404.html` with HTTP status 404. GitHub Pages does this itself. nginx and Caddy need an explicit `error_page` or `handle_errors` rule, or unknown URLs return the wrong status.
- [ ] Deploy from CI with SSH and `rsync`, or ship the static tree in a small image. Keep `pnpm generate` as the build. Do not switch the site to `nuxt build` unless a server runtime is an explicit choice.
- [ ] Keep the previous release on disk and switch a symlink (or an equivalent) so a bad deploy can be rolled back without rebuilding.
- [ ] Harden the server: SSH keys only, no password login, a non-root deploy user, a firewall, and unattended security updates.
- [ ] Back up server config and anything that is not in git. The repository remains the source of the pages. A future form or mailbox store would need its own backup.
- [ ] Add an uptime check against the canonical home page and the TLS certificate expiry.
- [ ] Keep access and error logs, with rotation. Do not add extra personal data to those logs.

## GitHub Pages

- [ ] Decide whether `https://aminhadei.github.io/dgientco/` stays as a preview or is retired once the domain works.
- [ ] If it is retired, stop the Pages deploy workflow so an old base URL is not published by mistake.
- [ ] If it stays, give it its own generate step (`NUXT_APP_BASE_URL=/dgientco/` and the github.io site URL). Do not point the custom domain at that artifact.
- [ ] Update the site URL section in `README.md` and `app/utils/site.ts` when the default public URL changes.

## SEO at launch

- [ ] Verify the property in Google Search Console and Bing Webmaster Tools after the domain resolves.
- [ ] Submit the sitemap. It is `/sitemap.xml` on the new origin. The `Sitemap:` line in `robots.txt` must use the same `NUXT_PUBLIC_SITE_URL`.
- [ ] Request indexing of the home page once the canonical URLs match the live host.
- [ ] Choose analytics only if you need it. Prefer a privacy-friendly option (hosted or self-hosted Plausible or Umami are examples, not a requirement). Do not add advertising scripts. If the tool sets cookies, say so on the privacy page.
- [ ] Replace `public/images/og.png` and the icons in `public/` with approved artwork, then regenerate. The tags already point at those files.
- [ ] If a second language is added later, add `hreflang` and a per-locale `og:locale`. Do not add them for a single Persian site.

## Real content

- [x] Replace the sample company text, address, phone, and email with approved copy. Do not invent the missing facts in the repo.
- [x] Replace the wordmark and logo files, and check the header, the footer, and the manifest icons. The mark is `public/brand/logo-mark.png`. The full lockup is `public/brand/logo-full.png`.
- [ ] Replace photographs. Keep width and height on `AppImage`, and update [CREDITS.md](../CREDITS.md) for every new source. The hero and news images are still stock photos.
- [x] Replace startup profiles with the projects page. News dates stay ISO in frontmatter. The site renders them as Jalali with Persian digits.
- [ ] Replace placeholder news. The current articles are labeled samples and do not state company events.
- [ ] Have the legal pages reviewed by someone who can approve them before launch: legal information, privacy, and terms. The name and contact details are updated. The privacy and terms text still needs that review.
- [x] Remove sample registration numbers, phone numbers, and street addresses wherever they still appear, including the footer.

## Contact

- [ ] Create the mailboxes the contact page will show, on the production domain.
- [ ] Publish SPF, DKIM, and DMARC so those addresses cannot be spoofed easily.
- [x] The contact page is phone, email, address, and messengers. There is no contact form. The footer newsletter control was removed, so the site does not tell people they have subscribed.
- [ ] If a real form is required, add a separate backend or form service, with spam protection, and keep page content static. Keep secrets out of the repository.

## Performance and accessibility

- [ ] Re-run a performance pass and `pnpm test:e2e` after the real copy and images land. The axe check fails the suite on serious and critical issues, and the hero test checks that the title, the lead, and the stats bar do not overlap.
- [ ] Recompress new photos (WebP, explicit dimensions) before adding them to `public/images/`.
- [ ] Check that new font files, if the brand type changes, stay self-hosted and that the preload list in `nuxt.config.ts` still matches the weights in use.

## Internationalization

Optional. Do this only if a second language is actually required.

- [ ] Keep Persian (`lang="fa"`, `dir="rtl"`) as the default.
- [ ] Add routes, navigation, and SEO for the new locale. A left-to-right language needs its own `dir`. Do not flip the Persian pages.

## CMS for non-developers

Optional. Do this only if people who do not edit the repository will publish news.

- [ ] Keep `nuxt generate` as the publish step. A git-based CMS on the markdown in `content/`, or a headless CMS that commits or feeds the generate job, both fit. Do not add a runtime server for page content.

## Cutover

- [ ] Rehearse on a staging hostname with the production env vars.
- [ ] Run `pnpm check`, `pnpm generate`, `pnpm links`, and `pnpm test` on that build.
- [ ] Lower DNS TTL, switch the records, watch the uptime check and the server logs, then raise TTL again.
- [ ] Confirm the live home page title, canonical URL, sitemap, and `robots.txt` match the new origin.
