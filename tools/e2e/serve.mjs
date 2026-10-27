import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, sep } from "node:path";

const root = join(process.cwd(), ".output", "public");
const port = Number(process.env.E2E_PORT || 4173);
const host = "127.0.0.1";
const rawBase = process.env.NUXT_APP_BASE_URL || "/dgientco/";
const basePath = rawBase === "/" ? "" : rawBase.replace(/\/$/, "");

const mime = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".wasm": "application/wasm",
  ".webmanifest": "application/manifest+json",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

if (!existsSync(join(root, "index.html"))) {
  console.error(
    "Missing .output/public/index.html. Run: NUXT_APP_BASE_URL=/dgientco/ pnpm generate",
  );
  process.exit(1);
}

function safeJoin(relativePath) {
  const file = normalize(join(root, relativePath));
  if (file !== root && !file.startsWith(`${root}${sep}`)) return null;
  return file;
}

function isFile(file) {
  try {
    return statSync(file).isFile();
  } catch {
    return false;
  }
}

function resolveFile(urlPath) {
  let pathname = decodeURIComponent((urlPath || "/").split("?")[0] || "/");
  if (basePath) {
    if (pathname !== basePath && !pathname.startsWith(`${basePath}/`)) return null;
    pathname = pathname.slice(basePath.length) || "/";
  }
  if (!pathname.startsWith("/")) pathname = `/${pathname}`;
  const relative = pathname.replace(/^\/+/, "");
  const candidates =
    relative === "" || relative.endsWith("/")
      ? [join(relative, "index.html")]
      : [relative, join(relative, "index.html"), `${relative}.html`];

  for (const candidate of candidates) {
    const file = safeJoin(candidate);
    if (file && isFile(file)) return file;
  }
  return null;
}

const fallback = join(root, "404.html");

const server = createServer((request, response) => {
  const file = resolveFile(request.url || "/");
  const target = file || (isFile(fallback) ? fallback : null);
  if (!target) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }
  const type = mime[extname(target)] || "application/octet-stream";
  response.writeHead(file ? 200 : 404, { "content-type": type });
  if (request.method === "HEAD") {
    response.end();
    return;
  }
  createReadStream(target).pipe(response);
});

server.listen(port, host, () => {
  const prefix = basePath || "";
  console.log(`Serving ${root} at http://${host}:${port}${prefix}/`);
});
