const logger = require('../../../config/logger.config');

class ElementLinkText {
    constructor(elementName, selector) {
        this.element = element(by.linkText(selector));
        this.elementName = elementName;
    }
    click() {
        logger.info(`Clicking "${this.elementName}"`);
        return this.element.click();
    };
    
    get() {
        return this.element.get();
    }
};

module.exports = ElementLinkText;