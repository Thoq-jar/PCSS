/* sof */
async function injectBCSS(t){try{const e=await fetch(t);e.ok||console.error("BCSS Failed to load!");const c=await e.text(),n=document.createElement("style");n.innerText=c,n.innerText=c,document.head.appendChild(n)}catch({}){console.error("BCSS Failed to load!")}}const cssURL="https://raw.githubusercontent.com/Thoq-jar/PCSS/master/.pcss/pcss.css?token=GHSAT0AAAAAACV7HKLY4NBUXGHPA22CHPUGZVZATYA";injectBCSS(cssURL).then((t=>{}));
/* eof */
