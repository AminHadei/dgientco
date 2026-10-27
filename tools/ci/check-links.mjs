import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, posix } from "node:path";

const outputRoot = join(process.cwd(), ".output/public");
const baseURL = process.env.NUXT_APP_BASE_URL || "/";
const base = baseURL === "/" ? "" : baseURL.replace(/\/$/, "");
const siteSource = readFileSync(join(process.cwd(), "app/utils/site.ts"), "utf8");
const defaultSiteUrl = siteSource.match(/defaultSiteUrl = "([^"]+)"/)?.[1];
if (!defaultSiteUrl) {
  console.error("Could not read defaultSiteUrl from app/utils/site.ts");
  process.exit(1);
}
const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || defaultSiteUrl).replace(
  /\/+$/,
  "",
);

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) files.push(...walk(path));
    else files.push(path);
  }
  return files;
}

function stripQuery(url) {
  return url.split("#")[0].split("?")[0];
}

function documentPath(file) {
  let rel = file.slice(outputRoot.length).replaceAll("\\", "/");
  if (!rel.startsWith("/")) rel = `/${rel}`;
  if (rel.endsWith("/index.html")) rel = rel.slice(0, -"index.html".length);
  if (rel === "/") return `${base}/`;
  return `${base}${rel}`;
}

function toLocalPath(raw, pagePath) {
  const value = stripQuery(raw.trim());
  if (!value || value.startsWith("#")) return null;
  if (/^(mailto:|tel:|javascript:|data:)/i.test(value)) return null;
  if (value.startsWith("//")) return null;

  let path = value;
  let fromSiteUrl = false;
  if (/^https?:\/\//i.test(path)) {
    if (!path.startsWith(siteUrl)) return null;
    path = path.slice(siteUrl.length) || "/";
    fromSiteUrl = true;
  } else if (!path.startsWith("/")) {
    path = new URL(path, `http://local${pagePath}`).pathname;
  }
  if (!path.startsWith("/")) return null;
  if (!fromSiteUrl && base && path !== base && !path.startsWith(`${base}/`)) {
    return { missingBase: path };
  }
  if (base && (path === base || path.startsWith(`${base}/`))) {
    path = path.slice(base.length) || "/";
  }
  if (path === "/" || path === "") return "index.html";
  return path.replace(/^\//, "");
}

function resolveFile(localPath) {
  const candidates = [
    localPath,
    `${localPath}.html`,
    posix.join(localPath, "index.html"),
  ];
  for (const candidate of candidates) {
    const file = join(outputRoot, candidate);
    try {
      if (statSync(file).isFile()) return file;
    } catch {
      // try the next candidate
    }
  }
  return null;
}

function collectRefs(source) {
  const refs = [];
  const attr = /(?:href|src|poster)\s*=\s*["']([^"']+)["']/gi;
  const srcset = /(?:srcset|imagesrcset)\s*=\s*["']([^"']+)["']/gi;
  const cssUrl = /url\(\s*['"]?([^'")]+)['"]?\s*\)/gi;
  for (const pattern of [attr, cssUrl]) {
    for (const match of source.matchAll(pattern)) refs.push(match[1]);
  }
  for (const match of source.matchAll(srcset)) {
    for (const part of match[1].split(",")) {
      const url = part.trim().split(/\s+/)[0];
      if (url) refs.push(url);
    }
  }
  return refs;
}

const files = walk(outputRoot).filter((file) => /\.(html|css)$/.test(file));
const errors = [];

for (const file of files) {
  const source = readFileSync(file, "utf8");
  const pagePath = documentPath(file);
  for (const ref of collectRefs(source)) {
    const local = toLocalPath(ref, pagePath);
    if (!local) continue;
    if (typeof local === "object" && local.missingBase) {
      errors.push(`${file}: ${ref} is missing the ${base}/ base`);
      continue;
    }
    if (!resolveFile(local)) {
      errors.push(`${file}: missing ${ref}`);
    }
  }
}

const robots = join(outputRoot, "robots.txt");
const sitemap = join(outputRoot, "sitemap.xml");
for (const required of [robots, sitemap, join(outputRoot, "site.webmanifest")]) {
  try {
    if (!statSync(required).isFile()) errors.push(`missing ${required}`);
  } catch {
    errors.push(`missing ${required}`);
  }
}

const robotsText = readFileSync(robots, "utf8");
const expectedSitemap = `Sitemap: ${siteUrl}/sitemap.xml`;
if (!robotsText.includes(expectedSitemap)) {
  errors.push(`robots.txt does not reference ${expectedSitemap}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Checked ${files.length} files under ${outputRoot}`);
