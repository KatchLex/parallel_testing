const BasePage = require('../base_page/pageBasePage');
const ElementButtonClassName = require('../base_elements/elementButtonClassName');
const ElementXpath = require ('../base_elements/elementElementXpath')

class HandlerHomePage extends BasePage {
  constructor() {
    super();
    this.url = 'https://www.handler.by/';
    this.openSearch = new ElementButtonClassName('Open Search Field', 'top-btn inline-search-show twosmallfont');
    this.linkPolicy = new ElementXpath('Open Policy link', "//*[contains(text(),'Политика')]");
  };
  open() {
    return super.open(this.url);
  };
  clickOpenSearch(){
    return this.openSearch.click();
  };
  clickLinkPolicy(){
    return this.linkPolicy.click();
  };
};

module.exports = HandlerHomePage;