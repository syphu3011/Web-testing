const {
  Builder,
  By,
  Key,
  until,
  Actions,
  Button,
} = require("selenium-webdriver");
(async function test() {
  let driver = await new Builder().forBrowser("chrome").build();
  let count = 0;
  while (count < 10) {
    try {
      await driver.get("http://127.0.0.1:5501/");
      await driver.navigate().refresh();
      await driver.findElement(By.id("user")).click();
      await driver.findElement(By.id("mailorphone")).sendKeys("thaonguyen");
      await driver.findElement(By.id("passwd")).sendKeys("290702");
      await driver.findElement(By.id("btn-login")).click();
      await driver
        .findElement(By.xpath("/html/body/div[9]/div/div[3]/div[2]/ul/li[3]"))
        .click();
      await driver.findElement(By.id("choose-amount")).sendKeys("\u0008");
      await driver.findElement(By.id("choose-amount")).sendKeys("88");
      await driver.findElement(By.id("onclick-product")).click();
      await driver
        .findElement(By.xpath("/html/body/div[4]/div/div/div/div[2]/div[6]"))
        .click();
      await driver.sleep(1000);
      await driver
        .findElement(By.xpath("/html/body/div[9]/div/div[3]/div[2]/ul/li[4]"))
        .click();
      await driver.findElement(By.id("choose-amount")).sendKeys("\u0008");
      await driver.findElement(By.id("choose-amount")).sendKeys("88");
      await driver.findElement(By.id("onclick-product")).click();
      await driver
        .findElement(By.xpath("/html/body/div[4]/div/div/div/div[2]/div[6]"))
        .click();
      await driver.sleep(1000);
      await driver.findElement(By.id("cart")).click();
      await driver.sleep(1000);
      let actions = driver.actions({ async: true });
      await actions.move({
        origin: driver.findElement(
          By.xpath(
            "/html/body/div[5]/div/div/div/table/tbody/tr[7]/div[6]/input"
          )
        ),
      });
      driver
        .findElement(
          By.xpath(
            "/html/body/div[5]/div/div/div/table/tbody/tr[7]/div[6]/input"
          )
        )
        .click();
      await actions.move({
        origin: driver.findElement(
          By.xpath(
            "/html/body/div[5]/div/div/div/table/tbody/tr[8]/div[6]/input"
          )
        ),
      });
      driver
        .findElement(
          By.xpath(
            "/html/body/div[5]/div/div/div/table/tbody/tr[8]/div[6]/input"
          )
        )
        .click();
      await driver
        .findElement(By.id("choose-amount-cart-6"))
        .sendKeys("\u0008");
      await driver.findElement(By.id("choose-amount-cart-6")).sendKeys("99");
      await driver.findElement(By.id("gio-hang")).click();
      await driver
        .findElement(By.id("choose-amount-cart-7"))
        .sendKeys("\u0008");
      await driver.findElement(By.id("choose-amount-cart-7")).sendKeys("99");
      await driver.findElement(By.id("gio-hang")).click();
      await driver.findElement(By.id("btn-thanhtoan")).click();
      await driver.sleep(1000);
      await driver.findElement(By.id("inp-dc")).sendKeys("Địa chỉ");
      await driver.findElement(By.id("btn-xacnhan")).click();
      await driver.sleep(2000);
      await driver.findElement(By.id("div-hoadon")).click();
      await console.log("Pass");
    } catch (e) {
      console.log(e);
      await console.log("Fail");
    } finally {
      await count++;
    }
  }
  await driver.quit();
})();
