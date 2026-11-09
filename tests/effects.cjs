const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  const url = process.env.TEST_URL || 'http://127.0.0.1:8000';
  await page.goto(url);
  await page.waitForSelector('.resume-card a[download]');
  const ok = (value, label) => {
    if (!value) throw Error(label);
    console.log('PASS ' + label);
  };
  ok((await page.locator('.demo-link[href]').count()) === 4, 'four supplied demo links render');
  ok(
    (await page.locator('#project-grid a[href*="github.com"]').count()) === 11,
    'project source links match the supplied list',
  );
  const card = page.locator('.project-card').first();
  await card.hover();
  await page.waitForTimeout(250);
  ok(await card.evaluate((e) => e.classList.contains('pointer-lit')), 'mouse spotlight activates');
  ok(
    await card.evaluate((e) => e.style.getPropertyValue('--tilt-x') !== ''),
    'card tilt activates',
  );
  await page.locator('.topbar').hover();
  await page.waitForTimeout(100);
  ok(
    await card.evaluate(
      (e) => !e.classList.contains('pointer-lit') && !e.style.getPropertyValue('--tilt-x'),
    ),
    'card effects reset after mouse leaves',
  );
  const button = page.locator('.filter-row button').first();
  await button.click();
  ok((await button.locator('.button-ripple').count()) === 1, 'button click ripple');
  await page.waitForTimeout(700);
  ok((await page.locator('.button-ripple').count()) === 0, 'ripple cleans up');
  ok(
    (await page.locator('.ambient-scene').getAttribute('aria-hidden')) === 'true',
    'background is decorative',
  );
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForFunction(() => document.documentElement.dataset.pointerEffects === 'false');
  ok(
    (await page.locator('html').getAttribute('data-pointer-effects')) === 'false',
    'reduced motion disables pointer effects',
  );
  ok(await page.locator('.ambient-scene').isHidden(), 'reduced motion hides 3D scene');
  await button.click();
  ok((await page.locator('.button-ripple').count()) === 0, 'reduced motion disables ripple');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.setViewportSize({ width: 390, height: 850 });
  ok(
    await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
    'mobile has no horizontal overflow',
  );
  ok(await page.locator('.geometry').first().isHidden(), 'mobile hides geometry');
  const touch = await browser.newContext({
    hasTouch: true,
    isMobile: true,
    viewport: { width: 390, height: 850 },
  });
  const mobile = await touch.newPage();
  await mobile.goto(url);
  await mobile.waitForSelector('.resume-card a');
  ok(
    (await mobile.locator('html').getAttribute('data-pointer-effects')) === 'false',
    'touch devices disable pointer tracking',
  );
  await touch.close();
  ok(errors.length === 0, 'no effects runtime errors');
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
