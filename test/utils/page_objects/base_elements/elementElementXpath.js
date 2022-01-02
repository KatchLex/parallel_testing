const logger = require('../../../config/logger.config');

class ElementXpath {
    constructor(elementName, selector) {
        this.element = element(by.xpath(selector));
        this.elementName = elementName;
    }
    click() {
        logger.info(`Clicking "${this.elementName}"`);
        return this.element.click();
    };
};

module.exports = ElementXpath;