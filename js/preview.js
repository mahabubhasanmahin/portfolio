import {translate} from './i18n.js?v=20261109-midnight1';
/** Native dialog supplies focus containment, Escape, and focus restoration. */
export function initImagePreview(){
 const dialog=document.createElement('dialog');dialog.className='image-dialog';dialog.setAttribute('aria-labelledby','preview-title');
 const header=document.createElement('div');header.className='preview-header';
 const title=document.createElement('h2');title.id='preview-title';
 const close=document.createElement('button');close.type='button';close.className='preview-close';close.textContent='×';close.setAttribute('aria-label','Close image preview');close.setAttribute('data-i18n-aria-label','Close image preview');
 const download=document.createElement('a');download.className='preview-download';download.download='';download.href=document.querySelector('[data-preview-src]').dataset.previewSrc;download.textContent='Download ↓';
 const image=document.createElement('img');image.setAttribute('data-i18n-dynamic','');
 const status=document.createElement('p');status.className='preview-status';status.setAttribute('role','status');status.setAttribute('aria-live','polite');
 header.append(title,close);dialog.append(header,status,image,download);document.body.append(dialog);
 let request=0;
 document.addEventListener('click',event=>{
  const trigger=event.target.closest('[data-preview-src]');if(!trigger||dialog.open)return;
  const src=trigger.dataset.previewSrc;const label=trigger.dataset.previewTitle||'Image preview';
  title.textContent=translate(label);close.setAttribute('aria-label',translate('Close image preview'));
  download.textContent=translate(trigger.classList.contains('certificate-preview')?'Download certificate':'Download ↓');download.href=src;
  status.textContent=translate('Loading image…');status.hidden=false;image.hidden=true;image.alt=translate(label);dialog.setAttribute('aria-busy','true');
  const current=++request;
  image.onload=()=>{if(current!==request||!dialog.open)return;image.hidden=false;status.hidden=true;dialog.setAttribute('aria-busy','false');};
  image.onerror=()=>{if(current!==request||!dialog.open)return;image.hidden=true;status.hidden=false;status.textContent=translate('This image could not load. Please try again.');dialog.setAttribute('aria-busy','false');};
  dialog.showModal();document.body.classList.add('preview-open');close.focus();image.src=src;
 });
 close.addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
 dialog.addEventListener('close',()=>{request++;document.body.classList.remove('preview-open');image.onload=null;image.onerror=null;image.removeAttribute('src');image.hidden=true;dialog.removeAttribute('aria-busy');});
}
