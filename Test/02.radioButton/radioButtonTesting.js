const {Builder, By} = require('selenium-webdriver');
require("chromeDriver")

const driver = new Builder()
    .forBrowser('chrome')
    .build()
