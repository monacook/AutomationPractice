const {Builder, By} = require('selenium-webdriver');
require("chromeDriver")

const driver = new Builder()
    .forBrowser("chrome")
    .build()

async function post() {
    try {
         await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form")   
         await driver.findElement(By.name("title")).sendKeys("Oh wow! A total of 20 characters. ")
         await driver.findElement(By.name("description")).sendKeys("This is some type of description")
         await driver.findElement(By.css("form > div:nth-child(3) > div > div:nth-child(2) > label")).click()
         await driver.findElement(By.name("submit")).click()
    } catch (error) {
        console.log(error)
    }
}

post()


