const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
    args: ['--no-sandbox'],
  });
  const p = await b.newPage();
  const url = process.env.TEST_URL || 'http://127.0.0.1:8000';
  const ok = (v, s) => {
    if (!v) throw Error(s);
    console.log('PASS ' + s);
  };
  await p.goto(url);
  await p.waitForSelector('.resume-card');
  await p.locator('#profile').evaluate((e) => e.decode());
  ok(
    (await p.locator('#profile').getAttribute('data-image-shape')) === 'square',
    'authentic square portrait detected',
  );
  ok(
    await p.locator('#profile').evaluate((e) => getComputedStyle(e).objectFit === 'contain'),
    'complete authentic headshot fits frame',
  );
  ok(
    (await p.locator('#sidebar-profile').getAttribute('data-image-shape')) === 'square',
    'menu framing follows actual upload',
  );
  for (const width of [320, 390, 594, 760, 1024, 1440]) {
    await p.setViewportSize({ width, height: 950 });
    ok(
      await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      'no cutoff ' + width,
    );
  }
  const tall = Buffer.from(
    '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="600"><rect width="300" height="600" fill="#aaccee"/></svg>',
  );
  await p.route('**/assets/images/profile.png*', (r) =>
    r.fulfill({ status: 200, contentType: 'image/svg+xml', body: tall }),
  );
  await p.reload();
  await p.waitForSelector('.resume-card');
  await p.locator('#profile').evaluate((e) => e.decode());
  ok(
    (await p.locator('#profile').getAttribute('data-image-shape')) === 'portrait',
    'replacement tall upload detected',
  );
  ok(
    await p.locator('#profile').evaluate((e) => getComputedStyle(e).objectFit === 'cover'),
    'tall upload fills portrait frame',
  );
  ok(
    await p
      .locator('#sidebar-profile')
      .evaluate((e) => e.getBoundingClientRect().width <= e.parentElement.clientWidth + 1),
    'menu avatar stays inside its frame',
  );
  await b.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
