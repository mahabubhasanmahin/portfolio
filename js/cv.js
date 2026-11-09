import {translate} from './i18n.js?v=20261109-locales';

/** A real PDF preview with a normal open/download fallback for mobile browsers. */
export function initCVPreview(){
 const dialog=document.createElement('dialog');dialog.className='cv-dialog';dialog.setAttribute('aria-labelledby','cv-preview-title');
 const header=document.createElement('div');header.className='preview-header';
 const title=document.createElement('h2');title.id='cv-preview-title';title.textContent='CV preview';
 const close=document.createElement('button');close.type='button';close.className='cv-close';close.textContent='×';close.setAttribute('aria-label','Close CV preview');close.setAttribute('data-i18n-aria-label','Close CV preview');
 header.append(title,close);
 const frame=document.createElement('iframe');frame.title='CV document';frame.setAttribute('data-i18n-title','CV document');
 const help=document.createElement('div');help.className='cv-help';
 const note=document.createElement('span');note.textContent='If the preview does not appear, open the PDF.';
 const open=document.createElement('a');open.className='cv-open';open.textContent='Open PDF ↗';open.target='_blank';open.rel='noopener noreferrer';open.href=document.querySelector('[data-cv-src]').dataset.cvSrc;help.append(note,open);
 dialog.append(header,frame,help);document.body.append(dialog);
 document.addEventListener('click',event=>{const trigger=event.target.closest('[data-cv-src]');if(!trigger||dialog.open)return;frame.src=trigger.dataset.cvSrc;open.href=trigger.dataset.cvSrc;title.textContent=translate('CV preview');close.setAttribute('aria-label',translate('Close CV preview'));frame.title=translate('CV document');dialog.showModal();document.body.classList.add('preview-open');close.focus();});
 close.addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
 dialog.addEventListener('close',()=>{frame.removeAttribute('src');document.body.classList.remove('preview-open');});
}
