const ElementCSS = require("../base_elements/base_Element_CSS");
const ElementLinkText = require("../base_elements/base_Element_LinkText");
const Collection = require("../base_elements/base_Collection");

class Header {
    constructor() {
        this.navigationButtons = new Collection("Navigation Buttons", "div.header .div.text-center li");
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