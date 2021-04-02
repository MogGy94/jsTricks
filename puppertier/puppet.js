const puppeteer = require('puppeteer');

(
    async () => {
        let url = 'https://lectortmo.com/library/manga/8385/tate-no-yuusha-no-nariagari';
        /* let browser = await puppeteer.launch(); */
        //corre el navegador normal 
        let browser = await puppeteer.launch({ headless: false });
        let page = await browser.newPage();

        await page.goto(url, { waitUntil: "networkidle2" });

        const data = await page.evaluate(() => {
            const mangatitle = document.querySelector('.element-title.my-2');
            const description = document.querySelector(".element-description");
            const image = document.querySelector(".book-thumbnail");
            console.log("data");
            return {
                mangatitle: mangatitle.innerText,
                description: description.innerText,
                imgae: image.src
            }
        });


        console.log(data);
        await browser.close();
    }
)();