const BasePage = require('../base_page/pageBasePage');
const ElementButtonClassName = require('../base_elements/elementButtonClassName');
const ElementClassName = require('../base_elements/elementElementClassName');
const ElementXpath = require('../base_elements/elementElementXpath');

class HomePage extends BasePage {
    constructor() {
      super();
      this.url = 'https://www.westerndigital.com/';
      this.acceptCookiesButton = new ElementButtonClassName('Accept Cookies', 'truste-button truste-button-accept');
      this.expandSearchField = new ElementButtonClassName('Open Search Field', 'button searchbutton');
      this.cursorIntoSearchField = new ElementClassName('Type into Search Field', 'search expandright searchBTN');
      this.productsCheckBox = new ElementXpath('Products', "//input[@value='Products']/..");
    };
    open() {
      return super.open(this.url);
    };
    clickAcceptCookiesButton(){
      return this.acceptCookiesButton.click();
    };
    clickExpandSearchField(){
      return this.expandSearchField.click();
    };
    putCursorIntoSearchField(){
      return this.cursorIntoSearchField.click();
    };
    clickProductsCheckBox(){
      return this.productsCheckBox.click();
    };
};

module.exports = HomePage;