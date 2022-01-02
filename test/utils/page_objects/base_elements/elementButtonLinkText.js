const logger = require('../../../config/logger.config');

class ButtonLinkText {
    constructor(elementName, selector) {
        this.element = element(by.linkText(selector));
        this.elementName = elementName;
    }
    click() {
        logger.info(`Clicking "${this.elementName}" button`);
        return this.element.click();
    };
};

module.exports = ButtonLinkText;