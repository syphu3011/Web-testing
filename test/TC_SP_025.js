const {Builder,By } = require('selenium-webdriver');
require("chromedriver");
(async function checkFilter(){
    let driver = await new Builder().forBrowser("chrome").build();
    try{
        await driver.get("http://127.0.0.1:5500/");
        await driver.navigate().refresh()
        const actions = await driver.actions({ async: true });
        const muiten =  await driver.findElement({css:"#show-filter > img"});
        await actions.move({ origin: muiten }).perform();  
        await actions.mouse()       
        const inform = await driver.findElement({css:"#show-filter > img"}).isDisplayed();
        //console.log(inform);
        const muitenEnable =await driver.findElement({css:"#show-filter > img"}).isEnabled();
        const muitenClick = await driver.findElement({css:"#show-filter > img"})
        await muitenClick.click();
       
    }finally{
        //await driver.quit();
    }
})();