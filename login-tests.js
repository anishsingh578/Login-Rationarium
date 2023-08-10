const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.setDefaultTimeout(60000); // 60 seconds

  try {
    await page.goto('https://app.rationarium.com');

    // Enter invalid email and password
    await page.fill('#email', 'anishsingh@gmail.com');
    await page.fill('#password', 'Anish123');
    await page.click('button[type="signup"]');

    await page.waitForSelector('.error-message', { timeout: 10000 });

    console.log('Login failed as expected');
  } catch (error) {
    console.error('Error during login:', error);
  } finally {
    await browser.close();
  }
})();
