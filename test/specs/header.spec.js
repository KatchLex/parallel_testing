const expect = require("chai").expect;
const PageFactory = require("../utils/page_objects/pageFactory");
const EC = protractor.ExpectedConditions;
describe("Home page header", function () {

    beforeEach(function() {
            //browser.ignoreSynchronization = true;
            return browser.manage().window().maximize();
    });

    it("should open Region Selector Page with Continue button", async function () {
        await PageFactory.getPage("Home").open();
        await PageFactory.getPage("Home").Header.clickSelectRegionDropdown();
        browser.wait(function() {
            return element(by.linkText("Other country or region")).isPresent()});
        await PageFactory.getPage("Home").Header.clickOtherCountryOption();
        await PageFactory.getPage("Home").Header.clickContinueButton();
        browser.wait(EC.urlIs("https://www.westerndigital.com/en-us/region-selector"), 1000).then(function(result) {
            expect(result).to.be.true;
        });
    });

    it("should allow selecting Products via Search Input field", async function () {
        await PageFactory.getPage("Select Your Region").open();
        await PageFactory.getPage("Select Your Region").clickSelectUsEnglish();
        await PageFactory.getPage("Home").clickExpandSearchField();
        await element(by.className('search expandright searchBTN')).sendKeys("Flash Drive", protractor.Key.ENTER);
        browser.wait(function() {
            return element(by.xpath("//input[@value='Products']/..")).isPresent()});
        const arrayOfHeaderTexts = await element.all(by.xpath("//h3/*[1]")).getText();
        expect(arrayOfHeaderTexts.length).to.be.equal(10);
        // arrayOfHeaderTexts.forEach((element)) => {
        //     expect(element.includes('Flash')).to.be.true();
        // };
    });
});