const { By, Key} = require("selenium-webdriver"); 
const driver = require("../Config/configuration.js");
const Locators = require("../Locators/GoogleLocator.js")
const assert = require("assert")


    
async function GoogleTest() {
  
  await driver.manage().window().maximize();
  await driver.get(Locators.MainUrl);
  await driver.findElement(By.name("q")).sendKeys(Locators.CompanyUrl, Key.RETURN); 
  await driver.findElement(Locators.Website).click();
  await driver.sleep(3000);
  await driver.navigate().refresh();
  await driver.sleep(3000)
  assert(await driver.findElement(Locators.ContentTab).isDisplayed(),"ContentTab is not Avail");
  await driver.findElement(Locators.ContentTab).click();
  await driver.sleep(3000)
  await driver.findElement(Locators.TechNologyTab).click();
  await driver.sleep(3000);
  await driver.findElement(Locators.MarketingTab).click();
  await driver.sleep(3000);
  await driver.findElement(Locators.SolutionTab).click();
  await driver.sleep(3000);
  await driver.findElement(Locators.ThoughtsXangeTab).click();
  await driver.sleep(3000);
  await driver.findElement(Locators.Resource).click();
  await driver.sleep(3000);
  await driver.navigate().refresh();
  await driver.executeScript("window.scrollBy(0,650)");
  await driver.sleep(3000);
  await driver.findElement(Locators.Presentation).click();
  await driver.sleep(3000);
  await driver.executeScript("window.scrollBy(0,650)");
  await driver.sleep(3000);
  await driver.navigate().refresh();
  await driver.findElement(Locators.PresentationSlideArrow).click();
  await driver.sleep(3000)
  const tittle =await driver.getTitle();
  console.log("tittle : ",tittle)
  driver.sleep(3000)
  await driver.quit();
}

GoogleTest();

