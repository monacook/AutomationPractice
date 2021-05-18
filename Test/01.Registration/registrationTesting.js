const {Builder, By} = require('selenium-webdriver');
require("chromeDriver")

const driver = new Builder()
    .forBrowser('chrome')
    .build()

async function registration() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration")
        await driver.findElement(By.name("email")).sendKeys("jfkda@gmail.com")
        await driver.findElement(By.name("password")).sendKeys("fdafkfda")
        await driver.findElement(By.name("submit")).click()
    } catch (error) {
        console.log(error)    
    }
}

registration()