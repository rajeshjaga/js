const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch();
    const page = await puppeteer.newpage();
    await page.goto('www.google.com', { waitUntil: 'networkidle2' });

    setTimeout(() => { browser.close() }, 2500)
})();