const {chromium}=require('playwright');
(async()=>{
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];page.on('pageerror',error=>errors.push(error.message));
 const ok=(value,label)=>{if(!value)throw Error(label);console.log('PASS '+label)};
 await page.goto(process.env.TEST_URL||'http://127.0.0.1:8020/portfolio/');await page.waitForSelector('.resume-card');
 const links=await page.locator('.source-link,.demo-link').evaluateAll(nodes=>nodes.map(n=>n.href));
 for(const [locale,script,title,filter] of [['bn',/[\u0980-\u09ff]/,'অ্যালার্ট ও নোটিফিকেশন সিস্টেম','ব্যাকএন্ড'],['ja',/[\u3040-\u30ff\u3400-\u9fff]/,'アラート・通知システム','バックエンド']]){
  await page.selectOption('#language-select',locale);
  for(const selector of ['h1','#intro','#about-copy','#site-nav a','.skill-card h3','.certificate-details h3','.resume-card h3','.section-heading h2','.section-description','.internship-link','.cv-preview','.language-caption']){
   const texts=await page.locator(selector).allTextContents();ok(texts.every(text=>script.test(text)),'localized content '+locale+' '+selector);
  }
  ok((await page.title()).match(script),'localized browser title '+locale);
  ok(await page.locator('.project-card h3').first().textContent()===title,'descriptive project name '+locale);
  ok((await page.locator('.image-preview').first().getAttribute('aria-label')).includes(title),'localized screenshot label '+locale);
  ok((await page.locator('#project-status').textContent()).match(script),'localized project count '+locale);
  await page.locator('#filters').getByRole('button',{name:filter,exact:true}).click();ok(await page.locator('.project-card').count()===1,'filter works after translation '+locale);
  ok((await page.locator('#project-status').textContent()).match(script),'filtered count stays localized '+locale);
  await page.locator('#filters button').first().click();
  await page.locator('.image-preview').first().click();ok(await page.locator('#preview-title').textContent()===title,'preview title localized '+locale);await page.keyboard.press('Escape');
  await page.locator('.cv-preview').click();ok((await page.locator('#cv-preview-title').textContent()).match(script),'CV dialog localized '+locale);await page.keyboard.press('Escape');
  for(const width of [320,390,768,1440]){await page.setViewportSize({width,height:1000});ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'translated layout fits '+locale+' '+width);}
  ok(JSON.stringify(await page.locator('.source-link,.demo-link').evaluateAll(nodes=>nodes.map(n=>n.href)))===JSON.stringify(links),'URLs unchanged '+locale);
 }
 await page.selectOption('#language-select','en');ok(await page.locator('.project-card h3').first().textContent()==='Alert & Notification System','English restored');ok((await page.locator('h1').textContent()).includes('Md. Mahabub Hasan'),'English name restored');ok((await page.locator('#project-status').textContent())==='11 projects shown','English count restored');
 ok(errors.length===0,'no runtime errors');await browser.close();
})().catch(error=>{console.error(error);process.exit(1)});
