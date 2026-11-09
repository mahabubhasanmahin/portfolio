/** Current owner-supplied internship content, not inferred CV achievements. */
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } }),
    errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  const ok = (value, label) => {
    if (!value) throw Error(label);
    console.log('PASS ' + label);
  };
  await page.goto(process.env.TEST_URL || 'http://127.0.0.1:8020/portfolio/');
  await page.waitForSelector('.resume-card');
  ok(
    (await page.locator('.project-card h3').allTextContents()).slice(0, 5).join('|') ===
      'Alert & Notification System|Cipher Vault|FoodieHub|Duplicate File Finder & System Cleaner|Smart Safety Awareness Network',
    'requested first five projects in order',
  );
  ok((await page.locator('.project-card').count()) === 11, 'all legitimate projects retained');
  const languageText = {
    en: ['Kanchan, Narayanganj, Bangladesh', 'Final Semester', 'Technical Talent Acquisition'],
    bn: ['কাঞ্চন, নারায়ণগঞ্জ, বাংলাদেশ', 'শেষ সেমিস্টার', 'টেকনিক্যাল ট্যালেন্ট অ্যাকুইজিশন'],
    ja: ['カンチャン、ナラヤンガンジ、バングラデシュ', '最終学期', '技術人材採用'],
  };
  for (const [language, [location, semester, interest]] of Object.entries(languageText)) {
    await page.selectOption('#language-select', language);
    ok(
      (await page.locator('#location').textContent()) === location,
      'accurate location ' + language,
    );
    ok(
      (await page.locator('#education-list').textContent()).includes(semester),
      'final semester ' + language,
    );
    ok(
      (await page.locator('#intro').textContent()).includes(interest) &&
        (await page.locator('#about-copy').textContent()).includes(interest),
      'internship interests translated ' + language,
    );
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewportSize({ width, height: 950 });
      ok(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
        'no content overflow ' + language + ' ' + width,
      );
    }
  }
  await page.selectOption('#language-select', 'en');
  ok(
    !(await page.locator('body').innerText()).includes('Expected 2027'),
    'no invented graduation date in website text',
  );
  const schema = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
  ok(
    schema.mainEntity.homeLocation.name === 'Kanchan, Narayanganj, Bangladesh',
    'structured location matches contact',
  );
  ok(
    Object.keys(schema.mainEntity.homeLocation).join('|') === '@type|name',
    'no precise address or coordinates in profile schema',
  );
  ok(errors.length === 0, 'no runtime errors');
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
