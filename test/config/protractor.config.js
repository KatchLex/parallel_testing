const yargs = require('yargs').argv;

exports.config = {

    restartBrowserBetweenTests: true,
    
    directConnect: true,

    framework: 'mocha',

    specs: [
        '../specs/*.js'
    ],

    capabilities: {
        'browserName': 'chrome',
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1,
    },

    baseUrl: 'localhost',

    mochaOpts: {
        reporter: 'spec',
        timeout: 70000
    }
};