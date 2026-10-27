const puppeteer = require("puppeteer");
const fs = require("fs");

const screenshots = [
  // Our site
  {
    name: "our-home-desktop",
    url: "http://localhost:3000/",
    viewport: { width: 1920, height: 1080 },
  },
  {
    name: "our-home-mobile",
    url: "http://localhost:3000/",
    viewport: { width: 375, height: 812 },
  },
  {
    name: "our-about-desktop",
    url: "http://localhost:3000/about",
    viewport: { width: 1920, height: 1080 },
  },
  {
    name: "our-news-desktop",
    url: "http://localhost:3000/news",
    viewport: { width: 1920, height: 1080 },
  },
  {
    name: "our-contact-desktop",
    url: "http://localhost:3000/contact",
    viewport: { width: 1920, height: 1080 },
  },

  // Station F for comparison
  {
    name: "stationf-home-desktop",
    url: "https://stationf.co/",
    viewport: { width: 1920, height: 1080 },
  },
  {
    name: "stationf-home-mobile",
    url: "https://stationf.co/",
    viewport: { width: 375, height: 812 },
  },
  {
    name: "stationf-about-desktop",
    url: "https://stationf.co/about",
    viewport: { width: 1920, height: 1080 },
  },
  {
    name: "stationf-news-desktop",
    url: "https://stationf.co/news",
    viewport: { width: 1920, height: 1080 },
  },
  {
    name: "stationf-contact-desktop",
    url: "https://stationf.co/contact",
    viewport: { width: 1920, height: 1080 },
  },
];

async function takeScreenshots() {
  if (!fs.existsSync("screenshots-comparison")) {
    fs.mkdirSync("screenshots-comparison", { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: "/usr/local/bin/google-chrome",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  for (const screenshot of screenshots) {
    console.log(`Taking screenshot: ${screenshot.name}`);
    const page = await browser.newPage();

    await page.setViewport(screenshot.viewport);

    try {
      await page.goto(screenshot.url, {
        waitUntil: "networkidle2",
        timeout: 30000,
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));

      await page.screenshot({
        path: `screenshots-comparison/${screenshot.name}.png`,
        fullPage: false,
      });

      console.log(`✓ Saved: screenshots-comparison/${screenshot.name}.png`);
    } catch (error) {
      console.log(`✗ Failed: ${screenshot.name} - ${error.message}`);
    }

    await page.close();
  }

  await browser.close();
  console.log("\n✅ All screenshots taken!");
}

takeScreenshots().catch(console.error);
