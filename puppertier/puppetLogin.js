const puppeteer = require('puppeteer');

(
    async () => {
        let url = 'http://localhost:3004/';

        /* let browser = await puppeteer.launch(); */
        //corre el navegador normal 
        let browser = await puppeteer.launch({
            executablePath: '/path/to/Chrome',//Abrir con crome
            headless: false,
            args: [

                //'--start-fullscreen'
                /* '--start-maximized' // you can also use */
            ]
        });
        let page = await browser.newPage();
        await page.goto(url, { waitUntil: "networkidle2" });
        await page.setViewport({
            width: 0,
            height: 0,
        });

        await page.type('#login-user', 'procesador1');
        /* await page.type('#login-user', 'validador1'); */
        await page.type('#login-pwd', 'e1ef46c55fa040a0f407a09672ea7695');
        await page.click('#login-submit');


        /* 
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
        
         */
        /* console.log(data); */
        /* await browser.close(); */
    }
)();