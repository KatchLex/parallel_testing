exports.config = {
    
    seleniumAddress: 'http://localhost:4444/wd/hub',

    directConnect: true,

    specs: [
        '../specs/*.js'
    ],

    capabilities: {
        'browserName': 'chrome',
    },

    onPrepare: function () {
        browser.driver.manage().window().maximize();
        },
    
    jasmineNodeOpts: {showColors: true}
    }
