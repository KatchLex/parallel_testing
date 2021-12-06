const yargs = require('yargs').argv;

exports.config = {

    directConnect: true,

    framework: 'mocha',

    specs: [
        '../specs/*.js'
    ],

    capabilities: {
        'browserName': 'chrome',
    },

    baseUrl: 'localhost',

    mochaOpts: {
        reporter: 'spec',
        timeout: 70000
    }
};