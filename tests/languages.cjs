const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto(process.env.TEST_URL || 'http://127.0.0.1:8000');
  await page.waitForSelector('.resume-card');
  const ok = (x, s) => {
    if (!x) throw Error(s);
    console.log('PASS ' + s);
  };
  for (const lang of ['en', 'bn', 'ja']) {
    await page.selectOption('#language-select', lang);
    ok((await page.locator('html').getAttribute('lang')) === lang, 'document language ' + lang);
    ok(
      (await page.locator('#project-grid a[href*="github.com"]').count()) === 11,
      'all supplied project GitHub links ' + lang,
    );
    if (lang === 'bn')
      ok((await page.locator('#intro').textContent()).includes('শেষ সেমিস্টার'), 'Bengali content');
    if (lang === 'ja')
      ok((await page.locator('#intro').textContent()).includes('情報工学'), 'Japanese content');
    for (const width of [1440, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 950 });
      ok(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
        'no overflow ' + lang + ' ' + width,
      );
    }
    await page
      .locator('#filters')
      .getByRole('button', { name: /^(Backend|ব্যাকএন্ড|バックエンド)$/ })
      .click();
    ok((await page.locator('.project-card').count()) === 1, 'localized filter ' + lang);
    await page.locator('#filters button').first().click();
  }
  await page.reload();
  await page.waitForSelector('.resume-card');
  ok((await page.locator('html').getAttribute('lang')) === 'ja', 'language persists');
  ok(
    (await page.locator('#intro').evaluate((e) => parseFloat(getComputedStyle(e).fontSize))) >= 16,
    'readable body size',
  );
  if ((await page.locator('html').getAttribute('data-theme')) === 'light')
    await page.locator('#theme-toggle').click();
  await page.locator('#theme-toggle').click();
  ok(
    (await page.locator('html').getAttribute('data-theme')) === 'light',
    'theme works with translation',
  );
  ok(errors.length === 0, 'no runtime errors');
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
