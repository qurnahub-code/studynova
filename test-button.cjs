const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));

    await page.goto('https://getstudynova.online/printables/weekly-planner', { waitUntil: 'networkidle2' });
    
    console.log("Clicking button...");
    await page.click('#download-pdf-btn');
    
    console.log("Waiting 3 seconds...");
    await new Promise(r => setTimeout(r, 3000));
    
    await browser.close();
})();
