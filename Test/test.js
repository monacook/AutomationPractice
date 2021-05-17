const {Builder, By, Key, until} = require('selenium-webdriver');
require("chromeDriver")

const driver = new Builder()
    .forBrowser('chrome')
    .builder()
