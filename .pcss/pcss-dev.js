async function injectBCSS(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
           console.error('BCSS Failed to load!');
        }
        const cssStyles = await response.text();
        const styleSheet = document.createElement("style");
        styleSheet.innerText = cssStyles;
        styleSheet.innerText = cssStyles;
        document.head.appendChild(styleSheet);
    } catch ({}) {
        console.error('BCSS Failed to load!');
    }
}

const cssURL = 'https://raw.githubusercontent.com/Thoq-jar/PCSS/master/.pcss/pcss.css?token=GHSAT0AAAAAACV7HKLY4NBUXGHPA22CHPUGZVZATYA';

injectBCSS(cssURL).then(_ => {});