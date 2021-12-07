const PageFactory = require("../utils/page_objects/pageFactory");
const until = protractor.ExpectedConditions;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
describe("Protractor", function () {

    beforeEach(function() {
            browser.ignoreSynchronization = true;
            return browser.manage().window().maximize();
    });

    it("should open Region Selector Page with Continue button", async function () {
        await PageFactory.getPage("Home").open();
        await PageFactory.getPage("Home").Header.clickSelectRegionDropdown();
        browser.wait(until.visibilityOf(element(by.linkText("Other country or region"))), 6000);
        await PageFactory.getPage("Home").Header.clickOtherCountryOption();
        await PageFactory.getPage("Home").Header.clickContinueButton();
        const currentURL = browser.wait(until.urlIs("https://www.westerndigital.com/en-us/region-selector"), 6000);
        expect(currentURL).toBe(true, "Current URL Not Found");
        });

    it("should allow selecting Products via Search Input field", async function () {
        await PageFactory.getPage("Select Your Region").open();
        await PageFactory.getPage("Select Your Region").clickSelectUsEnglish();
        await PageFactory.getPage("Home").clickExpandSearchField();
        await element(by.className('search expandright searchBTN')).sendKeys("G-drive", protractor.Key.ENTER);
        browser.wait(until.visibilityOf(element(by.xpath("//input[@value='Products']/.."))), 6000);
        const arrayOfHeaderTexts = await element.all(by.xpath("//h3/*[1]")).getText();
        expect(arrayOfHeaderTexts.length).toEqual(10);
        const result = arrayOfHeaderTexts.every(element => element.includes("G-"));
        expect(result).toBe(true);
    });

    it("should have 4 items in Blog Page navigation Menu", async function () {
        await PageFactory.getPage("Blog").open();
        await PageFactory.getPage("Blog").navigationButtons.clickElementByText("People");
        const mainNavigationButton = PageFactory.getPage("Blog").navigationButtons.collection.get(0);
        browser.wait(until.elementToBeClickable(mainNavigationButton), 6000);
        const countOfNavigationButtons = await PageFactory.getPage("Blog").navigationButtons.getCount();
        expect(countOfNavigationButtons).toEqual(4);
    });
});
