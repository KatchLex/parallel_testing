const HomePage = require("./home_page/home_page");
const SelectYourRegionPage = require("./region_selector_page/region_selector_page");
const BasePage = require("./base_page/base_page");
const BlogPage = require("./blog_page/blog_page");

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();
            case "Select Your Region":
                return new SelectYourRegionPage();
            case "Blog":
                return new BlogPage();
            default:
                return new BasePage();        
        };
    };
};

module.exports = PageFactory;