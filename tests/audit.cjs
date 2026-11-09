/** Integration checks against a GitHub Pages-style /portfolio/ base path. */
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
    args: ['--no-sandbox'],
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: 'reduce',
  });
  const page = await context.newPage(),
    errors = [],
    missing = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('response', (response) => {
    if (response.url().startsWith(base) && response.status() >= 400) missing.push(response.url());
  });
  const base = process.env.TEST_URL || 'http://127.0.0.1:8015/portfolio/';
  const ok = (value, message) => {
    if (!value) throw Error(message);
    console.log('PASS ' + message);
  };
  await page.goto(base);
  await page.waitForSelector('.resume-card');
  const anchors = await page
    .locator('#site-nav a')
    .evaluateAll((links) => links.map((link) => link.hash));
  for (const hash of anchors) {
    await page.locator('#site-nav a[href="' + hash + '"]').click();
    await page.waitForTimeout(100);
    ok(
      (await page.locator('#site-nav a[aria-current="location"]').getAttribute('href')) === hash,
      'active navigation ' + hash,
    );
  }
  await page.goto(new URL('#skills', base).href);
  await page.waitForSelector('.resume-card');
  await page.waitForTimeout(150);
  ok(
    (await page.locator('#site-nav a[aria-current]').getAttribute('href')) === '#skills',
    'direct refresh retains section',
  );
  await page.goto(new URL('#%E0%A4%A', base).href);
  await page.waitForSelector('.resume-card');
  ok(errors.length === 0, 'malformed anchor does not crash initialization');
  const trigger = page.locator('.cv-preview');
  await trigger.click();
  ok(await page.locator('.cv-dialog').evaluate((d) => d.open), 'CV preview opens');
  const frameSrc = await page.locator('.cv-dialog iframe').getAttribute('src');
  const pdf = await page.request.get(new URL(frameSrc, page.url()).href);
  ok(
    pdf.ok() && (await pdf.body()).subarray(0, 5).toString() === '%PDF-',
    'preview loads authentic PDF',
  );
  await page.keyboard.press('Escape');
  ok(await page.locator('.cv-dialog').evaluate((d) => !d.open), 'CV preview closes with Escape');
  ok(await trigger.evaluate((e) => document.activeElement === e), 'CV focus returns to trigger');
  const download = page.waitForEvent('download');
  await page.locator('.resume-card a[download]').click();
  ok(
    (await download).suggestedFilename() === 'mahin_cv.pdf',
    'CV downloads with the exact mahin_cv.pdf filename',
  );
  ok(
    (await page.locator('#contact a[href="mailto:mahabubhasanmahin231@gmail.com"]').count()) === 1,
    'contact email preserves real mailto',
  );
  ok((await page.locator('form').count()) === 0, 'contact does not claim an unconfigured form');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base);
  await page.waitForSelector('.resume-card');
  const menu = page.locator('#menu-toggle');
  await menu.click();
  ok((await menu.getAttribute('aria-expanded')) === 'true', 'mobile menu opens');
  await page.keyboard.press('Escape');
  ok((await menu.getAttribute('aria-expanded')) === 'false', 'mobile menu closes with Escape');
  await menu.click();
  await page.locator('#site-nav a[href="#projects"]').click();
  ok(
    (await menu.getAttribute('aria-expanded')) === 'false',
    'mobile section selection closes menu',
  );
  await page.keyboard.press('Home');
  await page.evaluate(() => scrollTo(0, 0));
  await menu.click();
  await page.locator('.topbar').click();
  ok((await menu.getAttribute('aria-expanded')) === 'false', 'outside click closes menu');
  ok(errors.length === 0, 'no browser runtime errors');
  ok(missing.length === 0, 'no missing local requests');
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
