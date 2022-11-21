const {Builder,By} = require('selenium-webdriver');
require("chromedriver");
(async function checkInfor(){
    let driver = await new Builder().forBrowser("chrome").build();
    try{
        await driver.get("http://127.0.0.1:5500/");
        await driver.navigate().refresh()
        const actions = driver.actions({ async: true });
        const prodcut =  driver.findElement({css:"#list-product > li:nth-child(4)"});
        await actions.move({ origin: prodcut }).perform();  
        await actions.mouse()       
        const quantay = driver.findElement({css:"#list-product > li:nth-child(4)"});
        await quantay.click()
        const inform = await driver.findElement({css:"#sanphamcosan"}).isDisplayed();
        console.log(inform);
    }finally{
        await driver.quit();
    }
})();