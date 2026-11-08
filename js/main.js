import {initNavigation} from './navigation.js';
import {renderCertificates} from './certificates.js';
import {initImagePreview} from './preview.js';
import {initEffects} from './effects.js';
import {initLanguage,translate,translatePage} from './i18n.js';
import {portfolio as data} from './portfolio-data.js';
// Optional upload paths become active only when a real image is present.
await Promise.all([...data.projects,...data.certifications].map(async item=>{if(item.uploadImage&&await assetExists(item.uploadImage,'image/'))item.image=item.uploadImage;}));
const $ = selector => document.querySelector(selector);
const element = (tag, className, text) => {const node=document.createElement(tag);if(className)node.className=className;if(text!==undefined)node.textContent=text;return node;};
const external = (name,url) => {const a=element('a','',name);a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a;};
const heroName=$('#hero-name');heroName.replaceChildren();heroName.append(document.createTextNode(data.name.replace(new RegExp(' '+data.shortName+'$'),'')),element('br'));const lastName=element('span','',data.shortName);lastName.append(element('span','cyan','.'));heroName.append(lastName);
$('#current-focus').textContent=data.currentFocus;$('#headline').textContent=data.headline;$('#intro').textContent=data.intro;$('#about-copy').textContent=data.about;
$('#email').textContent=data.email+' ↗';$('#email').href='mailto:'+data.email;$('#location').textContent=data.location;$('#hometown').textContent=data.hometown;$('#footer-name').textContent=data.name;$('#year').textContent=new Date().getFullYear();
for(const [name,url] of Object.entries(data.socials)){$('#contact-socials').append(external(name+' ↗',url));if(['GitHub','LinkedIn'].includes(name))$('#hero-socials').append(external(name+' ↗',url));}
$('#sidebar-github').href=data.socials.GitHub;$('#codeforces').href=data.socials.Codeforces;
for(const [title,...skills] of data.skills){const card=element('article','skill-card');card.append(element('h3','',title));const tags=element('div','tags');skills.forEach(x=>tags.append(element('span','',x)));card.append(tags);$('#skills-grid').append(card);}
for(const [date,title,org] of data.education){const article=element('article');article.append(element('small','',date),element('h3','',title),element('p','',org));$('#education-list').append(article);}
renderCertificates(data.certifications,$('#certification-list'));
function renderProjects(category='All projects') {
 const projects=data.projects.filter(project=>category==='All projects'||project.category===category).sort((a,b)=>Number(Boolean(b.featured))-Number(Boolean(a.featured)));
 let normalHeading=false;
 $('#project-grid').replaceChildren();
 for(const project of projects){
  if(category==='All projects'){if(project===projects[0])$('#project-grid').append(element('h3','project-group-title','Featured projects'));if(!project.featured&&!normalHeading){$('#project-grid').append(element('h3','project-group-title','More projects'));normalHeading=true;}}
  const card=element('article','project-card'+(project.featured?' featured-card':''));
  const art=element('div','project-art');
  if(project.image){
   const image=element('img','project-screenshot');image.src=project.image;image.alt=project.name+' — Project screenshot';image.loading='lazy';image.width=900;image.height=440;
   const preview=element('button','image-preview');preview.type='button';preview.dataset.previewSrc=project.image;preview.dataset.previewTitle=project.name;preview.setAttribute('aria-label','View image — '+project.name);preview.append(image,element('span','image-preview-hint','View image'));image.addEventListener('error',()=>{preview.remove();art.setAttribute('aria-hidden','true');art.append(element('span','project-symbol',project.icon));},{once:true});art.append(preview);
  }else{art.setAttribute('aria-hidden','true');art.append(element('span','project-symbol',project.icon),element('span','art-caption','PROJECT EXPLORATION'));}
  const body=element('div','project-body');body.append(element('span','project-category',project.category),element('h3','',project.name),element('p','',project.description));
  const details=element('details','project-details');details.append(element('summary','','Project details'));const list=element('dl');for(const [label,value] of [['What it does',project.description],['My work',project.work],['What I learned',project.learning]]){if(!value)continue;list.append(element('dt','',label),element('dd','',value));}details.append(list);body.append(details);
  const tags=element('div','tags');project.stack.forEach(skill=>tags.append(element('span','',skill)));body.append(tags);
  const actions=element('div','project-actions');
  if(project.demo&&/^https:\/\//.test(project.demo)){const demo=external('Live demo ↗',project.demo);demo.className='project-link demo-link';actions.append(demo);}
  if(project.repo&&/^https:\/\/github\.com\//.test(project.repo)){const repo=external('GitHub ↗',project.repo);repo.className='project-link source-link';actions.append(repo);}
  body.append(actions);card.append(art,body);$('#project-grid').append(card);
 }
 $('#project-status').textContent=projects.length+' '+translate('projects shown');translatePage($('#project-grid'));
}
for(const c of ['All projects',...new Set(data.projects.map(p=>p.category))]){const b=element('button','',c);b.type='button';b.setAttribute('aria-pressed',String(c==='All projects'));b.addEventListener('click',()=>{$('#filters').querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderProjects(c);});$('#filters').append(b);}renderProjects();
// Optional authentic assets are checked before exposing images or download links.
async function assetExists(path,type){try{const r=await fetch(path,{method:'HEAD'});return r.ok&&(r.headers.get('content-type')||'').includes(type);}catch{return false;}}
if(await assetExists(data.photo,'image/')){const img=$('#profile');img.onload=()=>{img.hidden=false;$('#portrait-fallback').hidden=true;};img.onerror=()=>{img.hidden=true;$('#portrait-fallback').hidden=false;};img.src=data.photo;}
for(const cv of data.resumes){const card=element('article','resume-card');const copy=element('div');copy.append(element('h3','',cv.name),element('p','','PDF document'));card.append(copy);if(await assetExists(cv.path,'application/pdf')){const a=element('a','','Download ↓');a.href=cv.path;a.download='';card.append(a);if(cv===data.resumes[0]){const heroCV=document.querySelector('.hero-actions a[href="#resume"]');if(heroCV){heroCV.href=cv.path;heroCV.download='';}}}else card.append(element('span','asset-status','PDF not supplied'));$('#resume-list').append(card);}
const themeButton=$('#theme-toggle');function setTheme(theme){document.documentElement.dataset.theme=theme;themeButton.textContent=theme==='dark'?'☼':'☾';themeButton.setAttribute('aria-label',translate('Switch to '+(theme==='dark'?'light':'dark')+' theme'));}try{setTheme(localStorage.getItem('mahin-theme')==='light'?'light':'dark');}catch{setTheme('dark');}themeButton.addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';setTheme(theme);try{localStorage.setItem('mahin-theme',theme);}catch{}});
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
if(!['reveal','tilt','spotlight','buttons','background'].some(key=>data.effects[key]))document.documentElement.dataset.effects='off';
const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){if(data.effects.reveal&&!reduced.matches)entry.target.classList.add('section-arrived');observer.unobserve(entry.target);}},{threshold:.08});document.querySelectorAll('main>.section,.journey-grid .section').forEach(x=>observer.observe(x));
const navLinks=[...document.querySelectorAll('.sidebar nav a')];const sectionObserver=new IntersectionObserver(entries=>{const active=entries.filter(x=>x.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(active){navLinks.forEach(a=>{const selected=a.hash==='#'+active.target.id;a.classList.toggle('active',selected);if(selected)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});$('.breadcrumb strong').textContent=navLinks.find(a=>a.hash==='#'+active.target.id)?.textContent.trim().replace(/^[⌂◉⌘▦⌨▤◇↓✉]\s*/,'')||translate('Home');}},{rootMargin:'-5% 0px -55% 0px',threshold:0});document.querySelectorAll('section[id]').forEach(s=>sectionObserver.observe(s));
initNavigation();
initImagePreview();
initEffects(data.effects);

initLanguage();
setTheme(document.documentElement.dataset.theme);
document.addEventListener("languagechange",()=>{setTheme(document.documentElement.dataset.theme);const count=$("#project-grid").querySelectorAll(".project-card").length;$("#project-status").textContent=count+" "+translate("projects shown");const active=document.querySelector(".sidebar nav a.active");if(active)$(".breadcrumb strong").textContent=active.textContent.trim().replace(/^[⌂◉⌘▦⌨▤◇↓✉]\s*/,"");});

// Honor shared section URLs after dynamic content has finished rendering.
if(location.hash){const target=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(target)requestAnimationFrame(()=>target.scrollIntoView({behavior:'instant'}));}
