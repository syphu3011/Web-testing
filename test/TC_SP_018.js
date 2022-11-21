const {Builder,By,Actions} = require('selenium-webdriver');
require("chromedriver");
var assert = require('assert');
(async function VerifyProductsAreCategorized(){
let driver = await new Builder().forBrowser("chrome").build();
try{
    await driver.get("http://127.0.0.1:5500/");
    await driver.navigate().refresh()
    const actions = driver.actions({async: true});
    const men =  driver.findElement(By.id("choose-product-men"));
    await actions.move({ origin: men }).perform();  
    await actions.mouse() 
    console.log("Sản phẩm theo từng loại dành cho Nam");
    let Ao = await driver.findElements({css:"#sanpham > div:nth-child(1)"});
    for(let link of Ao) {
        text = await link.getText();
        console.log(text);
    }
    console.log();
    let Quan = await driver.findElements({css:"#sanpham > div:nth-child(2)"});
    for(let link of Quan){
        text = await link.getText();
        console.log(text);
    }
    console.log();
    let Phukien= await driver.findElements({css:"#sanpham > div:nth-child(3)"});
    for(let link of Phukien){
        text = await link.getText();
        console.log(text);
    }
    
}finally{
await driver.quit();
}
})();
(async function VerifyProductsAreCategorized(){
    let driver = await new Builder().forBrowser("chrome").build();
    try{
        await driver.get("http://127.0.0.1:5500/");
        await driver.navigate().refresh()
        const actions = driver.actions({async: true});
        const women =  driver.findElement(By.id("choose-product-women"));
        await actions.move({ origin: women }).perform();  
        await actions.mouse() 
        console.log("Sản phẩm theo từng loại dành cho Nu");
        let Ao = await driver.findElements({css:"#sanpham > div:nth-child(1)"});
        for(let link of Ao) {
            text = await link.getText();
            console.log(text);
        }
        console.log();
        let Quan = await driver.findElements({css:"#sanpham > div:nth-child(2)"});
        for(let link of Quan){
            text = await link.getText();
            console.log(text);
        }
        console.log();
        let Phukien= await driver.findElements({css:"#sanpham > div:nth-child(3)"});
        for(let link of Phukien){
            text = await link.getText();
            console.log(text);
        }
        
    }finally{
        await driver.quit();
    }
    })();