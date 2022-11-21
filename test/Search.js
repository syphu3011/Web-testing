
const {Builder, By, Key, until, Actions, Button, WebElement} = require('selenium-webdriver');
var assert = require('assert');
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://127.0.0.1:5500/index.html')
    await driver.navigate().refresh()
    await driver.findElement(By.id("inp-search")).sendKeys("Balo")
    await driver.findElement(By.id("btn-search")).click()
    await driver.sleep(6000)
    await driver.findElement(By.id("inp-search")).clear()
    await driver.findElement(By.id("inp-search")).sendKeys("sdasd")
    await driver.findElement(By.id("btn-search")).click()
    await driver.sleep(10000)
  } finally {
   await driver.quit();
  }
})();

