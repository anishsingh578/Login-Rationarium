const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.setDefaultTimeout(120000);

  try {
    await page.goto('https://app.rationarium.com');
    
    await page.fill('#email', 'anish@gmail.com');
    await page.fill('#password', 'Anish123');
    await page.click('button[type="signin"]');

    await page.waitForSelector('.error-message');

    console.log('Login failed as expected');
  } catch (error) {
    console.error('Error during login:', error);
  } finally {
    await browser.close();
  }
})();

