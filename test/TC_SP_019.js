const {Builder} = require('selenium-webdriver');
require("chromedriver");
//var assert = require('assert');
/*
(async function AlertLogin1(){
    let driver = await new Builder().forBrowser("chrome").build();
    try{
    await driver.get("http://127.0.0.1:5500/");
    await driver.navigate().refresh()
    await driver.get("http://127.0.0.1:5500/");
        await driver.navigate().refresh()
        const actions = driver.actions({ async: true });
        const giohang =  driver.findElement({css:"#cart > img"});
        await actions.move({ origin: giohang }).perform();  
        await actions.mouse()  
        await giohang.click()     

    let alert = await driver.switchTo().alert();
    console.log(alert);
        
     }finally{
        //await driver.quit();
     }
     
})();*/
(async function AlertLogin2(){
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
        const inform = await driver.findElement({css:"#onclick-product"}).isDisplayed();
        //console.log(inform);   
        const addtocart = await driver.findElement({css:"#tagdivProduct > div:nth-child(2) > div.addtocart"});
        await addtocart.click();
        let alert = await driver.switchTo().alert();
        console.log(alert);
     }finally{
        //await driver.quit();
     }
     
})();