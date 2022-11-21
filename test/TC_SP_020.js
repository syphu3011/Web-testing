const {Builder,By } = require('selenium-webdriver');
require("chromedriver");
(async function checkFormProduct(){
    let driver = await new Builder().forBrowser("chrome").build();
    try{
        await driver.get("http://127.0.0.1:5500/");
        await driver.navigate().refresh()
        const actions = await driver.actions({ async: true });
        const prodcut =  await driver.findElement({css:"#list-product > li:nth-child(4)"});
        await actions.move({ origin: prodcut }).perform();  
        await actions.mouse()       
        const quantay = await driver.findElement({css:"#list-product > li:nth-child(4)"});
        await quantay.click()
        const inform = await driver.findElement({css:"#onclick-product"}).isDisplayed();
        console.log(inform);
    }finally{
        //await driver.quit();
    }
})();