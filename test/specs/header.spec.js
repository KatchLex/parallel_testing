const PageFactory = require("../utils/page_objects/pageFactory");
const EC = protractor.ExpectedConditions;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
const {Key} = require('selenium-webdriver');
const { element } = require("protractor");
var webDriver = require('selenium-webdriver');
var driver = new webDriver.Builder().withCapabilities(
    webDriver.Capabilities.chrome()
).build();

describe("Protractor", function () {

    beforeEach(function() {
            browser.ignoreSynchronization = true;
            return browser.manage().window().maximize();
    });

    it("should open Region Selector Page with Continue button", async function () {
        await PageFactory.getPage("Home").open();
        await PageFactory.getPage("Home").Header.clickSelectRegionDropdown();
        browser.wait(EC.visibilityOf(element(by.linkText("Other country or region"))), 6000);
        await PageFactory.getPage("Home").Header.clickOtherCountryOption();
        const continueButton = await element(by.linkText("Continue"));
        await browser.executeScript("arguments[0].style.backgroundColor = '" + "Fuchsia" + "'", continueButton);
        await browser.actions().click(continueButton).perform();
        const currentURL = browser.wait(EC.urlIs("https://www.westerndigital.com/en-us/region-selector"), 6000);
        expect(currentURL).toBe(true, "Current URL Not Found");
        });

    it("should allow selecting Products via Search Input field", async function () {
        await PageFactory.getPage("Select Your Region").open();
        await PageFactory.getPage("Select Your Region").clickSelectUsEnglish();
        await PageFactory.getPage("Home").clickExpandSearchField();
        await element(by.className('search expandright searchBTN')).sendKeys("G-drive", protractor.Key.ENTER);
        browser.wait(EC.visibilityOf(element(by.xpath("//input[@value='Products']/.."))), 10000);
        const arrayOfHeaderTexts = await element.all(by.xpath("//h3/*[1]")).getText();
        expect(arrayOfHeaderTexts.length).toEqual(10);
        const result = arrayOfHeaderTexts.every(element => element.includes("G-"));
        expect(result).toBe(true);
    });

    it("should have 4 items in Blog Page navigation Menu", async function () {
        await PageFactory.getPage("Blog").open();
        await PageFactory.getPage("Blog").navigationButtons.clickElementByText("People");
        const mainNavigationButton = PageFactory.getPage("Blog").navigationButtons.collection.get(0);
        browser.wait(EC.elementToBeClickable(mainNavigationButton), 6000);
        const countOfNavigationButtons = await PageFactory.getPage("Blog").navigationButtons.getCount();
        expect(countOfNavigationButtons).toEqual(4);
    });

describe("Handler", function () {

    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
    });

    it("should display 20 search results on a page", function () {
        browser.get('https://www.handler.by');
        browser.manage().window().maximize();
        const openSearch = browser.element(by.className('top-btn inline-search-show twosmallfont'));
        browser.actions().click(openSearch, webDriver.Button.LEFT).perform();
        browser.element(by.id('title-search-input'), 2000);
        browser.actions().sendKeys("петли").perform();
        const searchButton = browser.element(by.xpath("//button[@value='Найти']"));
        browser.executeScript("arguments[0].style.backgroundColor = '" + "MediumVioletRed" + "'", searchButton);
        const buttonClick = ".search-button-div  > :first-child";
        browser.executeScript("document.querySelector('" + buttonClick + "').click()");
        const searchResults = element.all(by.css('.item-title a:only-child'));
        expect(searchResults.count()).toEqual(20);
    });

    it("'Политика' page should have 'Соглашение на обработку персональных данных' title", function () {
        browser.get('https://www.handler.by')
        const policyButton = element(by.xpath("//*[contains(text(),'Политика')]"));
        browser.executeScript("arguments[0].style.backgroundColor = '" + "Fuchsia" + "'", policyButton);
        browser.executeScript("arguments[0].scrollIntoView();", policyButton);
        browser.actions().click(policyButton).perform();
        const agreement = element(by.css('#pagetitle'));
        expect(agreement.getText()).toContain('Соглашение на обработку персональных данных', 'Bad Job');
    });
  });
});
