const { By, Key} = require("selenium-webdriver"); 


function GoogleLocators(){
    this.MainUrl = "https://www.google.com";
    this.CompanyUrl = "Altius technologies ";
    this.Website = By.className("VuuXrf");
    this.ContentTab = By.id("menu-item-265");
    this.TechNologyTab = By.id("menu-item-266");
    this.MarketingTab = By.id("menu-item-267");
    this.SolutionTab = By.id("menu-item-268");
    this.ThoughtsXangeTab = By.id("menu-item-5389");
    this.Resource = By.id("menu-item-272");
    this.Presentation = By.xpath('(//div[@class ="elementor-widget-container optml-bg-lazyloaded"])[14]');
    this.PresentationSlideArrow = By.className('ms-nav-next ms-ctrl-hide');

}
module.exports = new GoogleLocators()


// MainUrl = "https://www.google.com";