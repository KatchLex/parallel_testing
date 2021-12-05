const BasePage = require("../base_page/base_page");
const ElementClassName = require("../base_elements/base_Element_ClassName");
const ElementXpath = require("../base_elements/base_Element_Xpath");

class SelectYourRegionPage extends BasePage {
    constructor() {
      super();
      this.url = "https://www.westerndigital.com/en-us/region-selector";
      this.selectYourRegion = new ElementXpath("Select Your Region", "//*[.='Select Your Region']");
      this.acceptCookiesButton = new ElementClassName("Accept Cookies", "truste-button2");
      this.selectUsEnglish = new ElementXpath("Select US English", "//span[text()='United States']/..");  
    };
    open() {
      return super.open(this.url);
    };
    clickAcceptCookiesButton(){
      return this.acceptCookiesButton.click();
    };
    clickSelectUsEnglish(){
      return this.selectUsEnglish.click();
    };
};

module.exports = SelectYourRegionPage;