/** One source of truth for training details, certificate images, and actions. */
export function renderCertificates(certificates,container){
 const make=(tag,className,text)=>{const node=document.createElement(tag);if(className)node.className=className;if(text)node.textContent=text;return node;};
 container.replaceChildren();
 certificates.forEach(certificate=>{
  const card=make('article','certificate-card');
  const details=make('div','certificate-details');details.append(make('small','certificate-date',certificate.date),make('h3','',certificate.title),make('p','',certificate.issuer));
  const status=make('p','certificate-status',certificate.image?'Image not available':'Certificate image not added');status.hidden=Boolean(certificate.image);status.setAttribute('role','status');details.append(status);
  if(certificate.image){
   const image=make('img','certificate-image');image.src=certificate.image;image.alt=certificate.title;image.width=800;image.height=560;image.loading='lazy';
   const actions=make('div','certificate-actions');
   const view=make('button','certificate-preview','View certificate');view.type='button';view.dataset.previewSrc=certificate.image;view.dataset.previewTitle=certificate.title;view.setAttribute('aria-haspopup','dialog');
   const download=make('a','certificate-download','Download certificate');download.href=certificate.image;download.download=certificate.image.split('/').pop();
   actions.append(view,download);details.append(actions);card.append(image);
   image.addEventListener('error',()=>{image.hidden=true;actions.hidden=true;status.hidden=false;},{once:true});
  }else{
   const placeholder=make('div','certificate-art');placeholder.setAttribute('aria-hidden','true');placeholder.append(make('span','certificate-symbol','◇'));card.append(placeholder);
  }
  card.append(details);container.append(card);
 });
}
