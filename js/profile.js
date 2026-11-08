/** Let the browser load the image directly; do not gate it on a HEAD request. */
export function initProfile(path){
 const image=document.querySelector('#profile'),fallback=document.querySelector('#portrait-fallback');
 const show=()=>{image.hidden=false;fallback.hidden=true;};
 const fail=()=>{image.hidden=true;fallback.hidden=false;};
 image.addEventListener('load',show);image.addEventListener('error',fail);
 const source=new URL(path,document.baseURI);const release=new URL(import.meta.url).searchParams.get('v');if(release)source.searchParams.set('v',release);
 if(image.src!==source.href)image.src=source.href;
 if(image.complete){if(image.naturalWidth>0)show();else if(image.getAttribute('src'))fail();}
}
