const {Builder, By, Key, until, Actions, Button, WebElement} = require('selenium-webdriver');
var assert = require('assert');
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://127.0.0.1:5500/index.html')
    await driver.navigate().refresh()
    await driver.findElement(By.id("user")).click()
    await driver.sleep(1000)
    await driver.findElement(By.id("mailorphone")).sendKeys("thaong")
    await driver.findElement(By.id("passwd")).sendKeys("123123")
    await driver.sleep(2000)
    await driver.findElement(By.id("btn-login")).click()
    await driver.sleep(2000)
    await driver.switchTo().alert().accept()
    await driver.sleep(1000)
    await driver.findElement(By.id("mailorphone")).clear()
    await driver.findElement(By.id("passwd")).clear()
    await driver.sleep(2000)
    await driver.findElement(By.id("btn-login")).click()
    await driver.sleep(2000)
    await driver.switchTo().alert().accept()
    await driver.sleep(2000)
    await driver.findElement(By.id("mailorphone")).sendKeys("thaonguyen")
    await driver.findElement(By.id("passwd")).sendKeys("290702")
    await driver.sleep(2000)
    await driver.findElement(By.id("btn-login")).click()
    await driver.sleep(2000)
    await driver.findElement(By.id("user")).click()
    await driver.sleep(10000)
  } finally {
     await driver.quit();
  }
})();