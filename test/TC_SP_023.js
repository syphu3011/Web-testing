const {Builder,By } = require('selenium-webdriver');
require("chromedriver");
(async function checkFormProductInform(){
    let driver = await new Builder().forBrowser("chrome").build();
    try{
        await driver.get("http://127.0.0.1:5500/");
        await driver.navigate().refresh()
        const actions = driver.actions({ async: true });
        const prodcut =  driver.findElement({css:"#list-product > li:nth-child(4)"});
        await actions.move({ origin: prodcut }).perform();  
        await actions.mouse()       
        const quantay = driver.findElement({css:"#list-product > li:nth-child(4)"});
        await quantay.click()
        const inform = await driver.findElement({css:"#onclick-product"}).isDisplayed();
        //console.log(inform);
        const ImagePro = await driver.findElement({css:"#tagdivProduct > div:nth-child(1) > img"}).isDisplayed();
        console.log(ImagePro);
        const SliderPro = await driver.findElement({css:"#tagdivProduct > div:nth-child(1) > div"}).isDisplayed();
        console.log(SliderPro);
        const NamePro = await driver.findElement({css:"#tagdivProduct > div:nth-child(2) > div:nth-child(1)"}).isDisplayed()
        console.log(NamePro);
        const XuatXuPro = await driver.findElement({css:"#tagdivProduct > div:nth-child(2) > div:nth-child(2)"}).isDisplayed();
        console.log(XuatXuPro);
        const IdPro = await driver.findElement({css:"#tagdivProduct > div:nth-child(2) > div:nth-child(3)"}).isDisplayed();
        console.log(IdPro);
        const SizePro = await driver.findElement({css:"#tagdivProduct > div:nth-child(2) > div:nth-child(4)"}).isDisplayed();
        console.log(SizePro);
        const quantity = await driver.findElement({css:"#tagdivProduct > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > input"}).isDisplayed();
        console.log(quantity);
        const GiaPro = await driver.findElement({css:"#tagdivProduct > div:nth-child(2) > div:nth-child(5) > div:nth-child(2)"}).isDisplayed();
        console.log(GiaPro);
        const AddToCart = await driver.findElement({css:"#tagdivProduct > div:nth-child(2) > div.addtocart"}).isDisplayed();
        const AddToCartEnable = await driver. findElement({css:"#tagdivProduct > div:nth-child(2) > div.addtocart"}).isEnabled();
        console.log(AddToCart);
    }finally{
        //await driver.quit();
    }
})();