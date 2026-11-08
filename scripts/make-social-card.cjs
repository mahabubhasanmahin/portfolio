/** Run with Playwright available: NODE_PATH=<dependencies>/node_modules node scripts/make-social-card.cjs */
const {chromium}=require('playwright');
const fs=require('node:fs');
const path=require('node:path');
(async()=>{
 const root=path.resolve(__dirname,'..');
 const portrait=fs.readFileSync(path.join(root,'assets/images/profile.png')).toString('base64');
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:1200,height:630},deviceScaleFactor:1});
 await page.setContent(`<style>*{box-sizing:border-box}body{margin:0;background:#101715;color:#f8fafc;font-family:Arial,sans-serif}.card{height:630px;padding:78px;display:flex;align-items:center;gap:55px;background:radial-gradient(ellipse at 85% 20%,#214430,transparent 65%)}.copy{flex:1}small{color:#6ee7b7;letter-spacing:3px;font-size:17px}h1{font-size:55px;line-height:1.16;letter-spacing:-2px;margin:30px 0}h1 span{color:#6ee7b7}p{font-size:23px;line-height:1.7;color:#a3b5ac}footer{font-size:18px;color:#a3b5ac;margin-top:40px}.portrait{width:295px;height:330px;border:1px solid #426b51;border-radius:30px;background:#19251f;display:flex;align-items:flex-end;overflow:hidden}img{width:100%;height:100%;object-fit:contain;object-position:center bottom}</style><div class="card"><div class="copy"><small>DEVELOPER PORTFOLIO</small><h1>Md. Mahabub Hasan<br><span>Mahin.</span></h1><p>CSE Student · C++ Problem Solver<br>Learning software development</p><footer>Dhaka, Bangladesh · Open to internships</footer></div><div class="portrait"><img src="data:image/png;base64,${portrait}"></div></div>`);
 await page.locator('img').evaluate(image=>image.decode());
 await page.screenshot({path:path.join(root,'assets/images/social-card.png')});
 await browser.close();
})().catch(error=>{console.error(error);process.exit(1)});
