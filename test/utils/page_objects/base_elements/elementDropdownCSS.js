const logger = require('../../../config/logger.config');

class DropdownCSS {
    constructor(elementName, selector) {
        this.element = element(by.css(selector));
        this.elementName = elementName;
    }
    click() {
        logger.info(`Clicking "${this.elementName}" dropdown`);
        return this.element.click();
    };
};

module.exports = DropdownCSS;