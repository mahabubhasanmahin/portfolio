/** A small, non-modal mobile menu with native button and link behavior. */
import {translate} from './i18n.js?v=20261108-r3';
export function initNavigation(){
 const toggle=document.querySelector('#menu-toggle'),nav=document.querySelector('#site-nav');
 const mobile=matchMedia('(max-width: 760px)');
 function setOpen(open){nav.classList.toggle('menu-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',translate(open?'Close menu':'Open menu'));toggle.querySelector('span').textContent=open?'×':'☰';}
 toggle.addEventListener('click',()=>setOpen(toggle.getAttribute('aria-expanded')!=='true'));
 nav.addEventListener('click',event=>{if(event.target.closest('a')&&mobile.matches)setOpen(false);});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&mobile.matches&&toggle.getAttribute('aria-expanded')==='true'){setOpen(false);toggle.focus();}});
 document.addEventListener('click',event=>{if(mobile.matches&&!event.target.closest('.sidebar'))setOpen(false);});
 mobile.addEventListener('change',()=>setOpen(false));document.addEventListener('languagechange',()=>setOpen(toggle.getAttribute('aria-expanded')==='true'));setOpen(false);
}
