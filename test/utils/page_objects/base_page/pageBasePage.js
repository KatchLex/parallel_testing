const logger = require('../../../config/logger.config');
const Header = require('./pageHeader');

class BasePage {
    constructor() {
        this.Header = new Header();
    };
    wait(waitInMilliseconds) {
        logger.info(`Waiting "${waitInMilliseconds}" milliseconds`);
        return browser.sleep(waitInMilliseconds);
    };
    async getCurrenUrl() {
        const currentUrl = browser.getCurrentUrl();
        logger.debug(`Current url is "${currentUrl}"`)
        return currentUrl;
    };
    open(url) {
        logger.info(`Opening "${url}" url`);
        return browser.get(url);
    };
};

module.exports = BasePage;