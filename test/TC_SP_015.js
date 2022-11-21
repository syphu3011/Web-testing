const {Builder, By} = require("selenium-webdriver");
require("chromedriver");
//const {XMLHttpRequest} = require("xhr2");

(async function CheckValidImageExit(){

let driver = await new Builder().forBrowser("chrome").build();

await driver.get("http://127.0.0.1:5500/");
await driver.navigate().refresh()
//const actions = driver.actions({async: true});
const img = await driver.findElement(By.css('#logo > img:nth-child(2)')).isDisplayed();
console.log(img);

await driver.quit();


//console.log(img);
/*
if(!url){
    return false;
}
return new Promise(res => {
        let request= new XMLHttpRequest();

        request.open('HEAD',url,true);
        request.send();
        request.onload = () => {
            res(request.status != 404 );
        };
        request.onerror = () =>{
            res(false);
        };
        
});*/

 //await driver.quit();
 })();
 /*
(async () => {
   console.log(await CheckValidImageExit('http://127.0.0.1:5500/Image/logo%20(1).png'));
   console.log(await CheckValidImageExit('http://127.0.0.1:5500/Image/logo%202.png'));
})()*/