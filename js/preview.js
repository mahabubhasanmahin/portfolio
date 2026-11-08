import {translate} from './i18n.js';
/** Native dialog supplies focus containment, Escape, and focus restoration. */
export function initImagePreview(){
 const dialog=document.createElement('dialog');dialog.className='image-dialog';dialog.setAttribute('aria-labelledby','preview-title');
 const header=document.createElement('div');header.className='preview-header';const title=document.createElement('h2');title.id='preview-title';const close=document.createElement('button');close.type='button';close.className='preview-close';close.textContent='×';close.setAttribute('aria-label',translate('Close image preview'));header.append(title,close);
 const image=document.createElement('img');dialog.append(header,image);document.body.append(dialog);
 document.addEventListener('click',event=>{const trigger=event.target.closest('[data-preview-src]');if(!trigger)return;image.src=trigger.dataset.previewSrc;image.alt=trigger.dataset.previewTitle||translate('Image preview');title.textContent=translate(trigger.dataset.previewTitle)||translate('Image preview');close.setAttribute('aria-label',translate('Close image preview'));dialog.showModal();document.body.classList.add('preview-open');close.focus();});
 close.addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
 dialog.addEventListener('close',()=>{document.body.classList.remove('preview-open');image.removeAttribute('src');});
}
