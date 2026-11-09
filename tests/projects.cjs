const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const url = process.env.TEST_URL || 'http://127.0.0.1:8000';
  await page.goto(url);
  await page.waitForSelector('.resume-card a');
  const ok = (value, label) => {
    if (!value) throw Error(label);
    console.log('PASS ' + label);
  };
  const expected = [
    ['Cipher Vault', 'CipherVault', 'https://ciphervault22.netlify.app/'],
    [
      'Smart Safety Awareness Network',
      'Smart-Safety-Awareness-Network',
      'https://ssan-web-kappa.vercel.app/',
    ],
    ['AI Face Age Detection', 'AI_Face_Age_Detection', 'https://aifaceage.netlify.app/'],
    ['FoodieHub', 'FoodieHub', 'https://onlinefoodorderingsystemh.netlify.app/'],
    ['Alert & Notification System', 'Alert-Notification-System'],
    ['E-Learning Quiz Platform', 'E-Learning-Quiz-Platform-Java-MySQL-'],
    ['Restaurant Management System', 'Restaurant-Management-System-Assembly-'],
    [
      'BFS Web Crawler',
      'Algorithm-Project/tree/main/WebCrawler_Using_BFS-20241119T062038Z-001/WebCrawler_Using_BFS',
    ],
    ['Duplicate File Finder & System Cleaner', 'Duplicate-File-Finder-and-Cleaner'],
    ['Smart Crop Recommendation System', 'SmartCropRecommendationSystem'],
    ['Line Coding Error Simulator', 'Line-Coding-Error-Simulator'],
  ];
  for (const [name, repo, demo] of expected) {
    const card = page
      .locator('.project-card')
      .filter({ has: page.getByRole('heading', { name, exact: true }) });
    ok(
      (await card.locator('.source-link').getAttribute('href')) ===
        'https://github.com/mahabubhasanmahin/' + repo,
      'source URL ' + name,
    );
    if (demo)
      ok((await card.locator('.demo-link').getAttribute('href')) === demo, 'demo URL ' + name);
    else ok((await card.locator('.demo-link').count()) === 0, 'no invented demo ' + name);
  }
  ok(
    (await page.locator('.sidebar #language-select').count()) === 1,
    'language selector is in sidebar',
  );
  await page.locator('#projects').scrollIntoViewIfNeeded();
  await page.locator('.project-screenshot').last().scrollIntoViewIfNeeded();
  for (const img of await page.locator('.project-screenshot').all()) {
    await img.scrollIntoViewIfNeeded();
    await img.evaluate((e) => e.decode());
    ok(await img.evaluate((e) => e.naturalWidth > 0), 'supplied screenshot decodes');
  }
  await page.goto(url + '/#education');
  await page.waitForSelector('.resume-card a');
  await page.waitForFunction(
    () => Math.abs(document.querySelector('#education').getBoundingClientRect().top) < 200,
  );
  ok(true, 'shared education anchor scrolls after render');
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
