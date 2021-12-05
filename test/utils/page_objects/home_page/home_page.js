const logger = require('../../../config/logger.config');
const BasePage = require("../base_page/base_page");
const Collection = require("../base_elements/base_collection");

class HomePage extends BasePage {
    constructor() {
      super();
      this.url = "https://www.westerndigital.com/";
      this.sections = new Collection("Navigation Buttons", "div.header .div.text-center li");
    };
    open() {
      return super.open(this.url);
    };
};

module.exports = HomePage;