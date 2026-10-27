import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import puppeteer from "puppeteer";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const chrome = process.env.CHROME_PATH || "/usr/local/bin/google-chrome";
const arabic900 = readFileSync(
  resolve(root, "public/fonts/vazirmatn-arabic-900-normal.woff2"),
).toString("base64");
const arabic400 = readFileSync(
  resolve(root, "public/fonts/vazirmatn-arabic-400-normal.woff2"),
).toString("base64");

const fontFace = `
  @font-face {
    font-family: "Vazirmatn";
    font-style: normal;
    font-weight: 900;
    font-display: block;
    src: url("data:font/woff2;base64,${arabic900}") format("woff2");
  }
  @font-face {
    font-family: "Vazirmatn";
    font-style: normal;
    font-weight: 400;
    font-display: block;
    src: url("data:font/woff2;base64,${arabic400}") format("woff2");
  }
`;

function documentHtml(body, width, height) {
  return `<!doctype html>
<html lang="fa" dir="rtl">
  <head>
    <meta charset="utf-8" />
    <style>
      ${fontFace}
      html, body { margin: 0; width: ${width}px; height: ${height}px; }
      body { font-family: Vazirmatn, sans-serif; background: #1c1917; color: #fafaf9; }
    </style>
  </head>
  <body>${body}</body>
</html>`;
}

const ogBody = `
  <div style="box-sizing:border-box;height:630px;padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between;">
    <div style="width:120px;height:12px;border-radius:999px;background:#024a70;"></div>
    <div>
      <div style="font-weight:900;font-size:112px;line-height:1.15;">دجینت‌کو</div>
      <div style="margin-top:28px;font-weight:400;font-size:36px;line-height:1.6;color:#fed7aa;">بزرگترین پردیس استارت‌آپی خاورمیانه</div>
    </div>
    <div style="font-weight:400;font-size:28px;color:#a8a29e;">پردیس استارت‌آپی</div>
  </div>
`;

const iconBody = `
  <div style="height:512px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;">
    <div style="font-weight:900;font-size:300px;line-height:0.85;">د</div>
    <div style="width:160px;height:16px;border-radius:999px;background:#024a70;"></div>
  </div>
`;

function pngToIco(png) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0);
  entry.writeUInt8(32, 1);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12);
  return Buffer.concat([header, entry, png]);
}

function scalePng(source, target, size) {
  const result = spawnSync(
    "ffmpeg",
    [
      "-y",
      "-i",
      source,
      "-vf",
      `scale=${size}:${size}:flags=lanczos`,
      "-update",
      "1",
      target,
    ],
    { stdio: "inherit" },
  );
  if (result.status !== 0) {
    throw new Error(`ffmpeg failed for ${target}`);
  }
}

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
});

async function shoot(html, width, height, file) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  mkdirSync(dirname(file), { recursive: true });
  await page.screenshot({ path: file, type: "png" });
  await page.close();
}

const ogPath = resolve(root, "public/images/og.png");
const iconPath = resolve(root, "public/icon-512.png");
await shoot(documentHtml(ogBody, 1200, 630), 1200, 630, ogPath);
await shoot(documentHtml(iconBody, 512, 512), 512, 512, iconPath);
await browser.close();

scalePng(iconPath, resolve(root, "public/icon-192.png"), 192);
scalePng(iconPath, resolve(root, "public/apple-touch-icon.png"), 180);
const faviconPng = resolve(root, "public/favicon-32.png");
scalePng(iconPath, faviconPng, 32);
writeFileSync(resolve(root, "public/favicon.ico"), pngToIco(readFileSync(faviconPng)));

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <style>
      @font-face {
        font-family: "Vazirmatn";
        font-weight: 900;
        src: url("data:font/woff2;base64,${arabic900}") format("woff2");
      }
    </style>
  </defs>
  <rect width="64" height="64" rx="14" fill="#1c1917"/>
  <text x="32" y="46" text-anchor="middle" font-family="Vazirmatn" font-size="40" font-weight="900" fill="#fafaf9">د</text>
  <rect x="20" y="52" width="24" height="3" rx="1.5" fill="#024a70"/>
</svg>
`;
writeFileSync(resolve(root, "public/favicon.svg"), svg);
