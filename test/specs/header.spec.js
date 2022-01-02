const logger = require('../config/logger.config');
const PageFactory = require('../utils/page_objects/pageFactory');
const EC = protractor.ExpectedConditions;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
const {Key} = require('selenium-webdriver');
const { element } = require('protractor');
const webDriver = require('selenium-webdriver');
const driver = new webDriver.Builder()
      .usingServer('http://localhost:4444/wd/hub')
      .withCapabilities(webDriver.Capabilities.chrome())
      .build();

describe('Protractor', function () {

    beforeEach(function() {
            browser.ignoreSynchronization = true;
            return browser.manage().window().maximize();
    });

    // Looks like this option is not available anymore on the site, so this test has been commented.

    // it('should open Region Selector Page with Continue button', async function () {
    //     await PageFactory.getPage('Home').open();
    //     await PageFactory.getPage('Home').Header.clickSelectRegionDropdown();
    //     browser.wait(EC.visibilityOf(element(by.linkText('Other country or region'))), 6000);
    //     await PageFactory.getPage('Home').Header.clickOtherCountryOption();
    //     const continueButton = await element(by.linkText('Continue'));
    //     await browser.executeScript("arguments[0].style.backgroundColor = '" + "Fuchsia" + "'", continueButton);
    //     await browser.actions().click(continueButton).perform();
    //     const currentURL = browser.wait(EC.urlIs('https://www.westerndigital.com/en-us/region-selector'), 6000);
    //     expect(currentURL).toBe(true);
    //     });

    it('should allow selecting Products via Search Input field', async function () {
        await PageFactory.getPage('Select Your Region').open();
        await PageFactory.getPage('Select Your Region').clickSelectUsEnglish();
        await PageFactory.getPage('Home').clickExpandSearchField();
        await element(by.className('search expandright searchBTN')).sendKeys('G-drive', protractor.Key.ENTER);
        browser.wait(EC.visibilityOf(element(by.xpath("//input[@value='Products']/.."))), 5000);
        const arrayOfHeaderTexts = await element.all(by.xpath('//h3/*[1]')).getText();
        expect(arrayOfHeaderTexts.length).toEqual(10);
        const result = arrayOfHeaderTexts.some(element => element.includes('SSD'));
        expect(result).toBe(true);
    });

    it('should have 4 items in Blog Page navigation Menu', async function () {
        await PageFactory.getPage('Blog').open();
        await PageFactory.getPage('Blog').navigationButtons.clickElementByText('People');
        const mainNavigationButton = PageFactory.getPage('Blog').navigationButtons.collection.get(0);
        browser.wait(EC.elementToBeClickable(mainNavigationButton), 6000);
        const countOfNavigationButtons = await PageFactory.getPage('Blog').navigationButtons.getCount();
        expect(countOfNavigationButtons).toEqual(4);
    });

describe('Handler', function () {

    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
    });

    it('should display 20 search results on a page', function () {
        PageFactory.getPage('HandlerHome').open();
        browser.manage().window().maximize();
        logger.silly('Handler homepage opened');
        PageFactory.getPage('HandlerHome').clickOpenSearch();
        browser.element(by.id('title-search-input'), 2000);
        browser.actions().sendKeys('петли').perform();
        const searchButton = browser.element(by.xpath("//button[@value='Найти']"));
        browser.executeScript("arguments[0].style.backgroundColor = '" + "Lime" + "'", searchButton);
        const buttonClick = '.search-button-div  > :first-child';
        browser.executeScript("document.querySelector('" + buttonClick + "').click()");
        const searchResults = element.all(by.css('.item-title a:only-child'));
        expect(searchResults.count()).toEqual(20);
    });

    it('"Политика" page should have "Соглашение на обработку персональных данных" title', function () {
        PageFactory.getPage('HandlerHome').open();
        logger.silly('Handler homepage opened');
        const policyLink = element(by.xpath("//*[contains(text(),'Политика')]"));
        browser.executeScript("arguments[0].style.backgroundColor = '" + "MediumVioletRed" + "'", policyLink);
        browser.executeScript("arguments[0].scrollIntoView();", policyLink);
        PageFactory.getPage('HandlerHome').clickLinkPolicy();
        const agreement = element(by.css('#pagetitle'));
        expect(agreement.getText()).toContain('Соглашение на обработку персональных данных');
    });
  });
});
