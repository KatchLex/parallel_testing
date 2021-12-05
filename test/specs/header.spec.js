const expect = require("chai").expect;
const PageFactory = require("../utils/page_objects/pageFactory");
const EC = protractor.ExpectedConditions;
describe("Home page header", function () {

    beforeEach(function() {
            browser.ignoreSynchronization = true;
            return browser.manage().window().maximize();
    });

    it("should have 6 menu items", async function () {
        await PageFactory.getPage("Home").open();
        await PageFactory.getPage("Home").Header.clickSelectRegionDropdown();
        await PageFactory.getPage("Home").Header.clickOtherCountryOption();
        await PageFactory.getPage("Home").Header.clickContinueButton();
        await PageFactory.getPage("Select Your Region").open();
        await PageFactory.getPage("Select Your Region").clickAcceptCookiesButton();
        await PageFactory.getPage("Select Your Region").clickSelectUsEnglish();
        //await PageFactory.getPage("Home").Header.navigationButtons.clickElementByText("SUPPORT");
        // const firstNavigationButton = PageFactory.getPage("Home").Header.navigationButtons.collection.get(3);
        // await browser.wait(EC.elementToBeClickable(firstNavigationButton), 10000);
        // const countOfNavigationButtons = await PageFactory.getPage("Home").Header.navigationButtons.getCount();
        // expect(countOfNavigationButtons).to.be.equal(5);
    });

    // This an example of a bad implementation, don't to it this way EVER!
    // xit("should have 6 menu items (Example of how NOT to do it)", async function () {
    //     await browser.get("https://www.epam.com");
    //     const arrayOfelementsTexts = await element.all(by.css("div.header .top-navigation__item")).getText();
    //     const elementToClickIndex = arrayOfelementsTexts.indexOf("OUR WORK");
    //     const elementToClick = element.all(by.css("div.header .top-navigation__item")).get(elementToClickIndex);
    //     await elementToClick.click();
    //     const firstNavigationButton = element.all(by.css("div.header .top-navigation__item")).get(0);
    //     await browser.wait(EC.elementToBeClickable(firstNavigationButton), 10000);
    //     const countOfNavigationButtons = await element.all(by.css("div.header .top-navigation__item")).count();
    //     expect(countOfNavigationButtons).to.be.equal(6);
    // });

});