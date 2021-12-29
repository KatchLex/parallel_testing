const BasePage = require("../base_page/pageBasePage");
const Collection = require("../base_elements/elementCollection");

class SupportPage extends BasePage {
    constructor() {
      super();
      this.url = "https://blog.westerndigital.com/";
      this.navigationButtons = new Collection("Navigation Buttons", "#main-nav li");
    };
    open() {
      return super.open(this.url);
    };
};

module.exports = SupportPage;