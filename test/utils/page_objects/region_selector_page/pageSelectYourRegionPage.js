const BasePage = require('../base_page/pageBasePage');
const ElementXpath = require('../base_elements/elementElementXpath');

class SelectYourRegionPage extends BasePage {
    constructor() {
      super();
      this.url = 'https://www.westerndigital.com/en-us/region-selector';
      this.selectUsEnglish = new ElementXpath('Select US English', "//span[text()='United States']/..");
      this.productsCheckBox = new ElementXpath('Check Products check box', "//input[@value='Products']/..");
    };
    open() {
      return super.open(this.url);
    };
    clickSelectUsEnglish(){
      return this.selectUsEnglish.click();
    };
};

module.exports = SelectYourRegionPage;