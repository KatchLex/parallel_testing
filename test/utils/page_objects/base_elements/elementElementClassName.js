const logger = require('../../../config/logger.config');

class ElementClassName {
    constructor(elementName, selector) {
        this.element = element(by.className(selector));
        this.elementName = elementName;
    }
    click() {
        logger.info(`Clicking "${this.elementName}"`);
        return this.element.click();
    };
};

module.exports = ElementClassName;