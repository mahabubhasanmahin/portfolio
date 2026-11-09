const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
    args: ['--no-sandbox'],
  });
  const p = await b.newPage();
  await p.goto(process.env.TEST_URL || 'http://127.0.0.1:8000');
  await p.waitForSelector('.resume-card');
  const ok = (v, s) => {
    if (!v) throw Error(s);
    console.log('PASS ' + s);
  };
  for (const lang of ['en', 'bn', 'ja']) {
    await p.selectOption('#language-select', lang);
    for (const width of [320, 390, 768, 1024, 1440, 1920]) {
      await p.setViewportSize({ width, height: 1000 });
      await p.locator('.portrait-scene').scrollIntoViewIfNeeded();
      ok(
        await p.locator('.portrait-scene').evaluate((e) => {
          const r = e.getBoundingClientRect();
          return [...e.querySelectorAll('.floating-label,.scene-caption')].every((label) => {
            const b = label.getBoundingClientRect();
            return (
              b.left >= r.left - 1 &&
              b.right <= r.right + 1 &&
              b.top >= r.top - 1 &&
              b.bottom <= r.bottom + 1
            );
          });
        }),
        'portrait badges fit ' + lang + ' ' + width,
      );
      ok(
        await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
        'no overflow ' + lang + ' ' + width,
      );
    }
  }
  await b.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
