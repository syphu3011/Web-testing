const {Builder, By, Key, until, Actions, Button} = require('selenium-webdriver');
require('chromedriver');
var assert = require('assert');
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://127.0.0.1:5500/')
    await driver.navigate().refresh()
    const actions = driver.actions({ async: true });
     
    const men =  driver.findElement(By.id("choose-product-men"));
    await actions.move({ origin: men }).perform();  
    await actions.mouse()      
    const inform = await driver.findElement({css:"#product"}).isDisplayed();
    //console.log(inform);
    const informproduct = await driver.findElement({css:"#sanpham"}).isDisplayed();
    //console.log(informproduct); 
    const quantay = driver.findElement({css:"#sanpham > div:nth-child(2) > ul > li:nth-child(1) > a"});
    await quantay.click();
    const dongho = driver.findElement({css:"#sanpham > div:nth-child(3) > ul > li:nth-child(1) > a"});
    await dongho.click();
    /*const women = driver.findElement(By.id("choose-product-women"));
    await actions.move({origin:women}).perform();
    await actions.mouse();
    const hoodie = driver.findElement(By.xpath("/html/body/div[7]/div[5]/div[1]/div[1]/ul/li[3]"));
    await hoodie.click();*/
    //await actions.move({origin: driver.findElement(By.xpath("//body/div[7]/div[5]/div[1]/div[3]/ul[1]/li[1]/a[1]"))}).perform()
} finally {
    // await driver.quit();
  }
})();

