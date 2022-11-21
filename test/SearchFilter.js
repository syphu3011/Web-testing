const {Builder, By, Key, until, Actions, Button, WebElement} = require('selenium-webdriver');
var assert = require('assert');
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://127.0.0.1:5500/index.html')
    await driver.navigate().refresh()
    let temp=0
    while(temp<3){
        switch(temp){
            case 0: 
                await driver.findElement(By.id("selected-type")).click()
                await driver.sleep(2000) 
                await driver.findElement(By.xpath("/html/body/div[7]/div[1]/div[2]/ul/li[5]")).click()
                await driver.sleep(2000)
                await driver.findElement(By.id("btn-search")).click()
                await driver.sleep(5000) 
                break;
            case 1:
                await driver.navigate().refresh()
                await driver.findElement(By.id("selected-price")).click()
                await driver.sleep(2000) 
                await driver.findElement(By.xpath("/html/body/div[7]/div[2]/div[2]/ul/li[4]")).click()
                await driver.sleep(2000)
                await driver.findElement(By.id("btn-search")).click()
                await driver.sleep(5000)
                break;
            case 2:
                await driver.navigate().refresh()
                await driver.findElement(By.id("selected-sale")).click()
                await driver.sleep(2000) 
                await driver.findElement(By.xpath("/html/body/div[7]/div[3]/div[2]/ul/li[2]")).click()
                await driver.sleep(2000)
                await driver.findElement(By.id("btn-search")).click()
                await driver.sleep(10000) 
                break;
        }
        temp++;
    }  
  } finally {
    await driver.quit();
  }
})();