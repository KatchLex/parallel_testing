const yargs = require("yargs").argv;

exports.config = {
    
    seleniumAddress: 'http://localhost:4444/wd/hub',

    directConnect: true,

    capabilities: {
        'browserName': yargs.browser || 'chrome',
        specs: yargs.specs || '../specs/*.js',
        shardTestFiles: yargs.instances > 1 ,
        maxInstances: yargs.instances || 1
    },    
    
    onPrepare: function () {
        browser.driver.manage().window().maximize();
    },
    
    jasmineNodeOpts: {showColors: true}
}
