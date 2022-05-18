const puppeteer = require ('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: true}); /// can set it to true, so it won't open the browser 
    const page = await browser.newPage()
    await page.goto(" ") //choose website


    const grabParagraph = await page.evaluate(() => {
        const pgTag = document.querySelector(" ")    //inside parenthesis the css or any class element you want to scrape (make sure to add . to the beggining)
        return pgTag.innerHTML;                              // can change innerHTML to other functions
    });




    console.log(grabParagraph);
    await browser.close();
})();


