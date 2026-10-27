import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

// Open Graph card. Icons and the trimmed logos come from export-logos.py.
const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const chrome = process.env.CHROME_PATH || "/usr/local/bin/google-chrome";
const arabic900 = readFileSync(
  resolve(root, "public/fonts/vazirmatn-arabic-900-normal.woff2"),
).toString("base64");
const arabic400 = readFileSync(
  resolve(root, "public/fonts/vazirmatn-arabic-400-normal.woff2"),
).toString("base64");
const mark = readFileSync(resolve(root, "public/brand/logo-mark.png")).toString(
  "base64",
);

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

const html = `<!doctype html>
<html lang="fa" dir="rtl">
  <head>
    <meta charset="utf-8" />
    <style>
      ${fontFace}
      html, body { margin: 0; width: 1200px; height: 630px; }
      body { font-family: Vazirmatn, sans-serif; background: #fafaf9; color: #1c1917; }
    </style>
  </head>
  <body>
    <div style="box-sizing:border-box;height:630px;padding:64px 72px;display:flex;align-items:center;gap:48px;">
      <img src="data:image/png;base64,${mark}" alt="" style="height:360px;width:auto;background:#fff;border:1px solid #e7e5e4;border-radius:28px;padding:24px;" />
      <div style="min-width:0;">
        <div style="font-weight:900;font-size:84px;line-height:1.15;">فنصاد</div>
        <div style="margin-top:16px;font-weight:400;font-size:28px;line-height:1.6;color:#024a70;">فناوری‌های نوین صنعت و انرژی دانش‌گستر</div>
        <div style="margin-top:28px;font-weight:400;font-size:26px;line-height:1.8;color:#44403c;">ماموریت شرکت، مولدسازی دارایی‌ها و تجاری‌سازی دستاوردهای دانشگاه علوم و تحقیقات تهران است.</div>
      </div>
    </div>
  </body>
</html>`;

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({
  path: resolve(root, "public/images/og.png"),
  type: "png",
});
await browser.close();
