const {Builder,By } = require('selenium-webdriver');
require("chromedriver");
(async function CheckSearch(){
    let driver = await new Builder().forBrowser("chrome").build();
    try{
        await driver.get("http://127.0.0.1:5500/");
        await driver.navigate().refresh()
        const search = await driver.findElement({css:"#btn-search"}).isDisplayed();
        console.log(search);
        const searchEnable = await driver.findElement({css:"#btn-search"}).isEnabled();
        console.log(searchEnable);
        if (search == true && searchEnable ==true)
        {
               // click on the search button
               let  searchIcon = await driver.findElement({css:"#btn-search"}).click();
        }
    }finally{
       //await driver.quit();
    }
})()
