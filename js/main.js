import {initCVPreview} from './cv.js?v=20261109-cv2';
import {initProfile} from './profile.js?v=20261109-cv2';
import {initNavigation} from './navigation.js?v=20261109-cv2';
import {renderCertificates} from './certificates.js?v=20261109-cv2';
import {initImagePreview} from './preview.js?v=20261109-cv2';
import {initEffects} from './effects.js?v=20261109-cv2';
import {initLanguage,translate,translatePage} from './i18n.js?v=20261109-cv2';
import {portfolio as data} from './portfolio-data.js?v=20261109-cv2';
initProfile(data.photo);
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
 const projects=data.projects.filter(project=>category==='All projects'||project.category===category);
 $('#project-grid').replaceChildren();
 for(const project of projects){
  const card=element('article','project-card');card.style.setProperty('--stagger',Math.min(projects.indexOf(project),5)*35+'ms');
  const art=element('div','project-art');
  if(project.image){
   const image=element('img','project-screenshot');image.src=project.image;image.alt=project.name+' — Project screenshot';image.loading='lazy';image.width=900;image.height=440;
   const preview=element('button','image-preview');preview.type='button';preview.dataset.previewSrc=project.image;preview.dataset.previewTitle=project.name;preview.setAttribute('aria-label','View image — '+project.name);preview.append(image,element('span','image-preview-hint','View image'));image.addEventListener('error',()=>{preview.remove();art.setAttribute('aria-hidden','true');art.append(element('span','project-symbol',project.icon));},{once:true});art.append(preview);
  }else{art.setAttribute('aria-hidden','true');art.append(element('span','project-symbol',project.icon),element('span','art-caption','PROJECT EXPLORATION'));}
  const body=element('div','project-body');body.append(element('span','project-category',project.category),element('h3','',project.name),element('p','',project.description));
  const details=element('details','project-details');details.append(element('summary','','Project details'));const list=element('dl');for(const [label,value] of [['What it does',project.description],['Project features',project.work],['Practice topics',project.learning]]){if(!value)continue;list.append(element('dt','',label),element('dd','',value));}details.append(list);body.append(details);
  const tags=element('div','tags');project.stack.forEach(skill=>tags.append(element('span','',skill)));body.append(tags);
  const actions=element('div','project-actions');
  if(project.demo&&/^https:\/\//.test(project.demo)){const demo=external('Live demo ↗',project.demo);demo.className='project-link demo-link';actions.append(demo);}
  if(project.repo&&/^https:\/\/github\.com\//.test(project.repo)){const repo=external('GitHub ↗',project.repo);repo.className='project-link source-link';actions.append(repo);}
  body.append(actions);card.append(art,body);$('#project-grid').append(card);
 }
 $('#project-status').textContent=projects.length+' '+translate('projects shown');translatePage($('#project-grid'));
}
for(const c of ['All projects',...new Set(data.projects.map(p=>p.category))]){const b=element('button','',c);b.type='button';b.setAttribute('aria-pressed',String(c==='All projects'));b.addEventListener('click',()=>{$('#filters').querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderProjects(c);});$('#filters').append(b);}renderProjects();
// Known local files link directly; network preflight checks must not block controls.
for(const cv of data.resumes){
 const card=element('article','resume-card');const copy=element('div');copy.append(element('h3','',cv.name),element('p','','PDF document'));card.append(copy);
 if(cv.path){const link=element('a','','Download ↓');link.href=cv.path;link.download=cv.downloadName||cv.path.split('/').pop();card.append(link);if(cv===data.resumes[0]){const heroCV=document.querySelector('.hero-actions .secondary');heroCV.href=cv.path;heroCV.download=link.download;}}
 else card.append(element('span','asset-status','PDF not supplied'));
 if(cv.path){const actions=element('div','resume-actions');const download=card.querySelector('a[download]');const preview=element('button','cv-preview','View CV');preview.type='button';preview.dataset.cvSrc=cv.path;preview.setAttribute('aria-haspopup','dialog');actions.append(preview,download);card.append(actions);}
 $('#resume-list').append(card);
}
const themeButton=$('#theme-toggle');function setTheme(theme){document.documentElement.dataset.theme=theme;document.querySelector('meta[name="theme-color"]').content=theme==='dark'?'#101715':'#f1f6f3';themeButton.textContent=theme==='dark'?'☼':'☾';themeButton.setAttribute('aria-label',translate('Switch to '+(theme==='dark'?'light':'dark')+' theme'));}try{setTheme(localStorage.getItem('mahin-theme-midnight')==='light'?'light':'dark');}catch{setTheme('dark');}themeButton.addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';setTheme(theme);try{localStorage.setItem('mahin-theme-midnight',theme);}catch{}});
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
if(!['reveal','tilt','spotlight','buttons','background'].some(key=>data.effects[key]))document.documentElement.dataset.effects='off';
const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){if(data.effects.reveal&&!reduced.matches)entry.target.classList.add('section-arrived');observer.unobserve(entry.target);}},{threshold:.08});document.querySelectorAll('main>.section,.journey-grid .section').forEach(x=>observer.observe(x));
initNavigation();
initImagePreview();
initCVPreview();
initEffects(data.effects);

initLanguage();
setTheme(document.documentElement.dataset.theme);
document.addEventListener("languagechange",()=>{setTheme(document.documentElement.dataset.theme);const count=$("#project-grid").querySelectorAll(".project-card").length;$("#project-status").textContent=count+" "+translate("projects shown");});
