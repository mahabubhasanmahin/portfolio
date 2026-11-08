/** Direct loading for the hero portrait and the matching menu avatar. */
export function initProfile(path){
 const source=new URL(path,document.baseURI);const release=new URL(import.meta.url).searchParams.get('v');if(release)source.searchParams.set('v',release);
 for(const [imageId,fallbackId] of [['profile','portrait-fallback'],['sidebar-profile','sidebar-profile-fallback']]){
  const image=document.getElementById(imageId),fallback=document.getElementById(fallbackId);if(!image)continue;
  const show=()=>{image.hidden=false;if(fallback)fallback.hidden=true;};const fail=()=>{image.hidden=true;if(fallback)fallback.hidden=false;};
  image.addEventListener('load',show);image.addEventListener('error',fail);
  if(image.src!==source.href)image.src=source.href;
  if(image.complete){if(image.naturalWidth>0)show();else if(image.getAttribute('src'))fail();}
 }
}
