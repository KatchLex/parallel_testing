const logger = require('../../../config/logger.config');
const BasePage = require("../base_page/base_page");
const Collection = require("../base_elements/base_collection");
const ElementClassName = require("../base_elements/base_Element_ClassName");
const ElementXpath = require("../base_elements/base_Element_Xpath");

class HomePage extends BasePage {
    constructor() {
      super();
      this.url = "https://www.westerndigital.com/";
      this.expandSearchField = new ElementClassName("Open Search Field", "button searchbutton");
      this.cursorIntoSearchField = new ElementClassName("Type into Search Field", "search expandright searchBTN");
      this.productsCheckBox = new ElementXpath("Products", "//input[@value='Products']/..");
      this.sections = new Collection("Navigation Buttons", "div.header .div.text-center li");
    };
    open() {
      return super.open(this.url);
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