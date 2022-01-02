const DropdownCSS = require('../base_elements/elementDropdownCSS');
const ElementLinkText = require('../base_elements/elementElementLinkText');
const ButtonLinkText = require('../base_elements/elementButtonLinkText');

class Header {
    constructor() {
        this.selectRegionDropdown = new DropdownCSS('Select Region', 'div.dropdownSelectOption');
        this.otherCountryOption = new ElementLinkText('Other country or region', 'Other country or region');
        this.continueButton = new ButtonLinkText('Continue', 'Continue');
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