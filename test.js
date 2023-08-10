const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Set a timeout for page load
  await page.setDefaultTimeout(60000); // 60 seconds

  try {
    await page.goto('https://prod.rationarium.com/');
    await page.waitForSelector('body');
    console.log('Page loaded successfully');
  } catch (error) {
    console.error('Error loading page:', error);
  } finally {
    await browser.close();
  }
})();
