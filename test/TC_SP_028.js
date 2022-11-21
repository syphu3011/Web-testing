const {Builder,By } = require('selenium-webdriver');
require("chromedriver");
(async function checkFormUser(){
    let driver = await new Builder().forBrowser("chrome").build();
    try{
        await driver.get("http://127.0.0.1:5500/");
        await driver.navigate().refresh()
        const actions = await driver.actions({ async: true });
        const user =  await driver.findElement({css:"#user > img"});
        await actions.move({ origin: user }).perform();  
        await actions.mouse()
        await user.click();    
        await driver.findElement({css:"#account"}).isDisplayed()
        await driver.findElement({css:"#signin"}).isDisplayed()
        const usertext = await driver.findElement({css:"#mailorphone"})
        await usertext.isEnabled();
        //console.log(usertext);
        await usertext.sendKeys("thaonguyen");
        //await usertext.click();
        const passText = await driver.findElement({css:"#passwd"})
        await passText.sendKeys("12345");
        const eyepass = await driver.findElement({css:"#img-hideshow"});
        await eyepass.click()
        
        const login = await driver.findElement({css:"#btn-login"})
        await login.isEnabled()
        await login.click()
        await driver.switchTo().alert();
        await driver.switchTo().alert().accept();
        console.log("Test Pass")
        
    }finally{
        //await driver.quit();
    }
})();