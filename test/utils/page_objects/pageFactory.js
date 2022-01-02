const HomePage = require('./home_page/pageHomePage');
const SelectYourRegionPage = require('./region_selector_page/pageSelectYourRegionPage');
const BasePage = require('./base_page/pageBasePage');
const BlogPage = require('./blog_page/pageBlogPage');
const HandlerHomePage = require('./home_page/pageHandlerHomePage');

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case 'Home':
                return new HomePage();
            case 'Select Your Region':
                return new SelectYourRegionPage();
            case 'Blog':
                return new BlogPage();
            case 'HandlerHome':
                return new HandlerHomePage();
            default:
                return new BasePage();        
        };
    };
};

module.exports = PageFactory;