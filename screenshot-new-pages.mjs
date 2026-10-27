import puppeteer from "puppeteer";

const pages = [
  {
    url: "http://localhost:3000/startups",
    name: "startups",
    viewport: { width: 1920, height: 1080 },
  },
  {
    url: "http://localhost:3000/startups",
    name: "startups-mobile",
    viewport: { width: 375, height: 812 },
  },
];

async function takeScreenshots() {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  try {
    for (const page of pages) {
      console.log(`Capturing ${page.name}...`);
      const browserPage = await browser.newPage();
      await browserPage.setViewport(page.viewport);

      await browserPage.goto(page.url, {
        waitUntil: "networkidle2",
        timeout: 30000,
      });

      // Wait a bit for any animations
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await browserPage.screenshot({
        path: `/workspace/public/screenshots/${page.name}.png`,
        fullPage: true,
      });

      await browserPage.close();
      console.log(`✓ Saved ${page.name}.png`);
    }
  } catch (error) {
    console.error("Error taking screenshots:", error);
    throw error;
  } finally {
    await browser.close();
  }
}

takeScreenshots()
  .then(() => {
    console.log("All screenshots captured successfully!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Failed to capture screenshots:", error);
    process.exit(1);
  });
