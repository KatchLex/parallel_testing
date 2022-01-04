const yargs = require("yargs").argv;

exports.config = {
    
    seleniumAddress: 'http://localhost:4444/wd/hub',

    directConnect: true,

    specs: [
        '../specs/*.js'
    ],

    capabilities: {
        'browserName': 'chrome',
        shardTestFiles: yargs.instances > 1 ,
        maxInstances: yargs.instances || 1,
    },

    onPrepare: function () {
        browser.driver.manage().window().maximize();
    },
    
    jasmineNodeOpts: {showColors: true}
}
