async function injectBCSS(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
           console.log('BCSS Failed to load!');
        }
        const cssStyles = await response.text();
        const styleSheet = document.createElement("style");
        styleSheet.innerText = cssStyles;
        styleSheet.innerText = cssStyles;
        document.head.appendChild(styleSheet);
    } catch (error) {
        console.error(error);
    }
}

const cssURL = 'https://example.com/path/to/your/raw/css/file.css';

injectBCSS(cssURL).then(_ => {});