const { Before, After, Status } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

Before(async function () {
  // Launch Chrome for each scenario
  this.browser = await chromium.launch({
    headless: process.env.PLAYWRIGHT_HEADLESS === '1' || process.env.PLAYWRIGHT_HEADLESS === 'true' ? true : false
  });

  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  // Screenshot if scenario failed
  if (scenario.result.status === Status.FAILED) {
    const dir = path.join(__dirname, '../reports/screenshots');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const screenshotPath = path.join(dir, `FAILED_${Date.now()}.png`);
    await this.page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`💥 Screenshot saved: ${screenshotPath}`);
  }

  // Close browser
  if (this.browser) await this.browser.close();
});
