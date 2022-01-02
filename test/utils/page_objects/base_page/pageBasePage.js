const logger = require('../../../config/logger.config');

const Header = require('./pageHeader');

class BasePage {
    constructor() {
        this.Header = new Header();
    };
    open(url) {
        logger.info(`Opening page via "${url}" url`);
        return browser.get(url);
    };
};

module.exports = BasePage;