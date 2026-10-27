import puppeteer from "puppeteer";

const pages = [
  // Desktop comparisons
  {
    our: "http://localhost:3000/",
    station: "https://stationf.co/",
    name: "home-desktop",
  },
  {
    our: "http://localhost:3000/about",
    station: "https://stationf.co/about",
    name: "about-desktop",
  },
  {
    our: "http://localhost:3000/news",
    station: "https://stationf.co/news",
    name: "news-desktop",
  },
  {
    our: "http://localhost:3000/contact",
    station: "https://stationf.co/contact",
    name: "contact-desktop",
  },
  // Mobile comparison
  {
    our: "http://localhost:3000/",
    station: "https://stationf.co/",
    name: "home-mobile",
    viewport: { width: 375, height: 812 },
  },
];

async function takeComparisons() {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  try {
    for (const page of pages) {
      const viewport = page.viewport || { width: 1920, height: 1080 };

      // Capture our site
      console.log(`Capturing our ${page.name}...`);
      const ourPage = await browser.newPage();
      await ourPage.setViewport(viewport);
      await ourPage.goto(page.our, { waitUntil: "networkidle2", timeout: 30000 });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await ourPage.screenshot({
        path: `public/screenshots/comparison-ours-${page.name}.png`,
        fullPage: false,
      });
      await ourPage.close();
      console.log(`✓ Saved ours-${page.name}.png`);

      // Capture Station F
      console.log(`Capturing Station F ${page.name}...`);
      const stationPage = await browser.newPage();
      await stationPage.setViewport(viewport);
      await stationPage.goto(page.station, {
        waitUntil: "networkidle2",
        timeout: 30000,
      });
      await new Promise((resolve) => setTimeout(resolve, 1500));
      await stationPage.screenshot({
        path: `public/screenshots/comparison-stationf-${page.name}.png`,
        fullPage: false,
      });
      await stationPage.close();
      console.log(`✓ Saved stationf-${page.name}.png`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  } finally {
    await browser.close();
  }
}

takeComparisons()
  .then(() => {
    console.log("All comparison screenshots captured!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Failed:", error);
    process.exit(1);
  });
