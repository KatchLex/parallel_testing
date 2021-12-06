const expect = require("chai").expect;
const PageFactory = require("../utils/page_objects/pageFactory");
const EC = protractor.ExpectedConditions;
describe("Home page header", function () {

    beforeEach(function() {
            browser.ignoreSynchronization = true;
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

    it("should allow selecting Products from via Search Input field", async function () {
        await PageFactory.getPage("Select Your Region").open();
        await PageFactory.getPage("Select Your Region").clickSelectUsEnglish();
        await PageFactory.getPage("Home").clickExpandSearchField();
        await element(by.className('search expandright searchBTN')).sendKeys("MP", protractor.Key.ENTER);
        browser.wait(function() {
            return element(by.xpath("//input[@value='Products']/..")).isPresent()});
        await PageFactory.getPage("Home").clickProductsCheckBox();
        // const productsCheckBox = element(by.xpath("//input[@value='Products']/.."));
        // expect(productsCheckBox.isSelected()).to.be.true();
        // const carouselHeading = await element(by.css(".carouselheading")).getText();
        // expect(carouselHeading).to.be.equal("Products");
    });

});

    //     //browser.driver.refresh();
    //     const firstMenuItemBrasil = await element(by.css("#productStore")).getText();
    //     expect(firstMenuItemBrasil).to.be.equal("PESQUISAR");
        
    // });
        //await PageFactory.getPage("Home").Header.navigationButtons.clickElementByText("SUPPORT");
        // const firstNavigationButton = PageFactory.getPage("Home").Header.navigationButtons.collection.get(3);
        // await browser.wait(EC.elementToBeClickable(firstNavigationButton), 10000);
        // const countOfNavigationButtons = await PageFactory.getPage("Home").Header.navigationButtons.getCount();
        // expect(countOfNavigationButtons).to.be.equal(5);
        //browser.wait(EC.visibilityOf($("//*[.='Select Your Region']")), 10000);
        //await browser.wait(EC.elementToBeClickable(firstNavigationButton), 10000);
        //expect(element(by.xpath("//*[.='Select Your Region']")).isDisplayed()).to.be.true
        //browser.wait(EC.urlIs("https://www.westerndigital.com/en-us/region-selector")); 

        // expect(element(by.xpath("//*[.='Select Your Region']")).isDisplayed()).to.be.true;
        //expect(pageUrl).to.be.equal("https://www.westerndigital.com/en-us/region-selector");
        // "https://www.westerndigital.com/en-us/region-selector";
        // browser.wait(EC.urlIs("https://www.westerndigital.com/en-us/region-selector")).to.be.equal(pageUrl);

        //const selectRegion = await element(By.css("//*[.='Select Your Region']")).getText();
        //expect(selectRegion).to.be.equal("Select Your Region");
        

//         await driver.get('file:///race_condition.html');
// const element = driver.findElement(By.css('p'));
// assert.strictEqual(await element.getText(), 'Hello from JavaScript!');
//         await browser.wait(EC.elementToBeClickable(firstNavigationButton), 10000);

    //     //const regionSelectorPage = 
    //     //await browser.wait(EC.visibilityOf(element(by.xpath("//*[.='Select Your Region']", 10000)))).to.be.true();
    //     //expect(regionSelectorPage).to.be.true();


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
