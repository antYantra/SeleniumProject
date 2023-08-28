const { Builder } = require("selenium-webdriver"); 
const chrome = require("selenium-webdriver/chrome");
require("chromedriver");

const options = new chrome.Options().excludeSwitches(["enable-automation"]);

  const driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

module.exports = driver;