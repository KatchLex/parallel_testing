const ElementCSS = require("../base_elements/elementElementCSS");
const ElementLinkText = require("../base_elements/elementElementLinkText");

class Header {
    constructor() {
        this.selectRegionDropdown = new ElementCSS("Select Region Button", "div.dropdownSelectOption");
        this.otherCountryOption = new ElementLinkText("Other country or region", "Other country or region");
        this.continueButton = new ElementLinkText("Continue Button", "Continue");
    };
    clickSelectRegionDropdown(){
        return this.selectRegionDropdown.click();
    };
    clickOtherCountryOption(){
        return this.otherCountryOption.click();
    };
    clickContinueButton(){
        return this.continueButton.click();
    };
};

module.exports = Header;