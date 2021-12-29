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
    async getText() {
        const elementText = await this.element.getText();
        logger.info(`"${this.elementName}" element text is ${elementText}`);
        return elementText;
    };
};

module.exports = ElementXpath;