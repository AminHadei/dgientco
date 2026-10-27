import puppeteer from "puppeteer";

const pages = [
  {
    url: "http://localhost:3000/projects",
    name: "projects",
    viewport: { width: 1920, height: 1080 },
  },
  {
    url: "http://localhost:3000/projects",
    name: "projects-mobile",
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

      await new Promise((resolve) => setTimeout(resolve, 1000));

      await browserPage.screenshot({
        path: `public/screenshots/${page.name}.png`,
        fullPage: true,
      });

      await browserPage.close();
      console.log(`✓ Saved ${page.name}.png`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  } finally {
    await browser.close();
  }
}

takeScreenshots()
  .then(() => {
    console.log("Done!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Failed:", error);
    process.exit(1);
  });
