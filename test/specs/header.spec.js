const PageFactory = require("../utils/page_objects/pageFactory");
const EC = protractor.ExpectedConditions;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
const {Builder, By, Key} = require('selenium-webdriver');
//const chrome = require('selenium-webdriver/chrome');

describe("Protractor", function () {

    beforeEach(function() {
            //browser.ignoreSynchronization = true;
            return browser.manage().window().maximize();
    });

    it("should open Region Selector Page with Continue button", async function () {
        await PageFactory.getPage("Home").open();
        await PageFactory.getPage("Home").Header.clickSelectRegionDropdown();
        browser.wait(EC.visibilityOf(element(by.linkText("Other country or region"))), 6000);
        await PageFactory.getPage("Home").Header.clickOtherCountryOption();
        await PageFactory.getPage("Home").Header.clickContinueButton();
        const currentURL = browser.wait(EC.urlIs("https://www.westerndigital.com/en-us/region-selector"), 6000);
        expect(currentURL).toBe(true, "Current URL Not Found");
        });

    it("should allow selecting Products via Search Input field", async function () {
        await PageFactory.getPage("Select Your Region").open();
        await PageFactory.getPage("Select Your Region").clickSelectUsEnglish();
        await PageFactory.getPage("Home").clickExpandSearchField();
        await element(by.className('search expandright searchBTN')).sendKeys("G-drive", protractor.Key.ENTER);
        browser.wait(EC.visibilityOf(element(by.xpath("//input[@value='Products']/.."))), 6000);
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

    it("Handler", async function () {
        // chromeOptions = new chrome.Options();
        // chromeOptions.addArguments('--start-maximized');
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://www.handler.by');
        await driver.findElement(By.className('top-btn inline-search-show twosmallfont')).click();
        await driver.waitForVisibleElement(By.id('title-search-input'), 2000).sendKeys('системы', Key.ENTER);
    });
});
