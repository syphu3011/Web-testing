const {Builder,By } = require('selenium-webdriver');
require("chromedriver");
(async function checkFormProduct(){
    let driver = await new Builder().forBrowser("chrome").build();
    try{
        await driver.get("http://127.0.0.1:5500/");
        await driver.navigate().refresh()
        const actions = driver.actions({ async: true });
        const nam =  driver.findElement({css:"#choose-product-men"});
        await actions.move({ origin: nam }).perform();  
        await actions.mouse()       
        const inform = await driver.findElement({css:"#product"}).isDisplayed();
        //console.log(inform);
        const informproduct = await driver.findElement({css:"#sanpham"}).isDisplayed();
        console.log(informproduct);

    }finally{
        //await driver.quit();
    }
})();