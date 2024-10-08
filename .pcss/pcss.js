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

const cssURL = 'https://raw.githubusercontent.com/Thoq-jar/PCSS/master/.pcss/pcss.min.css';

injectBCSS(cssURL).then(_ => {});
