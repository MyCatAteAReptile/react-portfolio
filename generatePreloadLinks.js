const fs = require('fs');
const path = require('path');

const manifest = require('./build/asset-manifest.json');

const fonts = Object.values(manifest.files).filter(
    (file) => file.endsWith('.woff2') || file.endsWith('.woff'),
);

const preloadLinks = fonts
    .map((font) => {
        const url = `${process.env.PUBLIC_URL || ''}${font}`;
        return `<link rel="preload" href="${url}" as="font" type="font/${path.extname(font).slice(1)}" crossorigin="anonymous">`;
    })
    .join('');

const indexHtmlPath = path.join(__dirname, 'build', 'index.html');
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

indexHtml = indexHtml.replace('<title>', `${preloadLinks}<title>`);

fs.writeFileSync(indexHtmlPath, indexHtml);
