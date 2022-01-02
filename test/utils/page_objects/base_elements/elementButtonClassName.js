const logger = require('../../../config/logger.config');

class ElementButtonClassName {
    constructor(elementName, selector) {
        this.element = element(by.className(selector));
        this.elementName = elementName;
    }
    click() {
        logger.info(`Clicking "${this.elementName}" button`);
        return this.element.click();
    };
};

module.exports = ElementButtonClassName;