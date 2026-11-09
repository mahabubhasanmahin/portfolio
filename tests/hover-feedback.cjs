const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
    args: ['--no-sandbox'],
  });
  const p = await b.newPage({ viewport: { width: 1440, height: 1000 } });
  await p.goto(process.env.TEST_URL || 'http://127.0.0.1:8000');
  await p.waitForSelector('.resume-card');
  const ok = (v, s) => {
    if (!v) throw Error(s);
    console.log('PASS ' + s);
  };
  const style = (e) => {
    const s = getComputedStyle(e);
    return {
      border: s.borderColor,
      shadow: s.boxShadow,
      background: s.backgroundImage,
      transform: s.transform,
    };
  };
  for (const theme of ['light', 'dark']) {
    if ((await p.locator('html').getAttribute('data-theme')) !== theme)
      await p.locator('#theme-toggle').click();
    const card = p.locator('.project-card').first();
    await card.scrollIntoViewIfNeeded();
    await p.mouse.move(1, 1);
    await p.waitForTimeout(300);
    const before = await card.evaluate(style);
    await card.hover();
    await p.waitForTimeout(320);
    const after = await card.evaluate(style);
    ok(before.border !== after.border, 'visible border change ' + theme);
    ok(before.shadow !== after.shadow, 'stronger shadow ' + theme);
    ok(after.transform !== 'none', 'card lifts ' + theme);
    await p.mouse.move(1, 1);
    await p.waitForTimeout(320);
    ok(
      (await card.evaluate((e) => getComputedStyle(e).transform)) === 'none',
      'hover resets ' + theme,
    );
  }
  await p.emulateMedia({ reducedMotion: 'reduce' });
  await p.locator('.project-card').first().hover();
  ok(
    (await p
      .locator('.project-card')
      .first()
      .evaluate((e) => getComputedStyle(e).transform)) === 'none',
    'reduced motion keeps stationary feedback',
  );
  await b.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
