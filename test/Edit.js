const {Builder, By, Key, until, Actions, Button, WebElement} = require('selenium-webdriver');
var assert = require('assert');
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://127.0.0.1:5500/index.html')
    await driver.navigate().refresh()

    //Trống
    // await driver.findElement(By.id("user")).click()
    // await driver.sleep(1000)
    // await driver.findElement(By.id("mailorphone")).sendKeys("thaonguyen")
    // await driver.findElement(By.id("passwd")).sendKeys("290702")
    // await driver.sleep(2000)
    // await driver.findElement(By.id("btn-login")).click()
    // await driver.sleep(2000)
    // await driver.findElement(By.id("user")).click()
    // await driver.sleep(2000)
    // await driver.findElement(By.id("up-date")).click()
    // await driver.sleep(2000)
    // await driver.findElement(By.id("update-name")).clear()
    // await driver.findElement(By.id("update-contact")).clear()
    // await driver.sleep(5000)
    // await driver.findElement(By.id("save-update")).click()
    // await driver.findElement(By.id("exit-log")).click()
    //await driver.sleep(5000)
    
    // //Sửa tên
    // await driver.findElement(By.id("user")).click()
    // await driver.sleep(1000)
    // await driver.findElement(By.id("mailorphone")).sendKeys("thaonguyen")
    // await driver.findElement(By.id("passwd")).sendKeys("290702")
    // await driver.sleep(2000)
    // await driver.findElement(By.id("btn-login")).click()
    // await driver.sleep(2000)
    // await driver.findElement(By.id("user")).click()
    // await driver.sleep(2000)
    // await driver.findElement(By.id("up-date")).click()
    // await driver.sleep(2000)
    // await driver.findElement(By.id("update-name")).clear()
    // await driver.findElement(By.id("update-name")).sendKeys("Mềnh")
    // await driver.findElement(By.id("update-contact")).clear()
    // await driver.findElement(By.id("update-contact")).sendKeys("0394142181")
    // await driver.sleep(5000)
    // await driver.findElement(By.id("save-update")).click()
    // await driver.findElement(By.id("exit-log")).click()
    // await driver.findElement(By.id("user")).click()
    //await driver.sleep(5000)

    //Thêm ảnh
    await driver.findElement(By.id("user")).click()
    await driver.sleep(2000)
    await driver.findElement(By.id("mailorphone")).sendKeys("thaonguyen")
    await driver.findElement(By.id("passwd")).sendKeys("290702")
    await driver.sleep(2000)
    await driver.findElement(By.id("btn-login")).click()
    await driver.sleep(2000)
    await driver.findElement(By.id("user")).click()
    await driver.sleep(2000)
    await driver.findElement(By.id("up-date")).click()
    await driver.sleep(2000)
    await driver.findElement(By.id("btn-addimg")).click()
    await driver.sleep(15000)
    await driver.findElement(By.id("save-update")).click()
    await driver.findElement(By.id("exit-log")).click()
    await driver.sleep(5000)
  } finally {
    await driver.quit();
  }
})();