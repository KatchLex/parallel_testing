Parallel tests running with yargs:

2 sets of tests are available: headerExpanded.js and headerShort.js

'yargs' properties added to capabilities in protractor.config.js

Running 'npm run test -- --instances 2' will perform each of the test files on a separate chrome instance
Running 'npm run test -- --browser firefox' will perform both test files on a single firefox instance
Running 'npm run test -- --specs ../specs/headerShort.spec.js --browser firefox' will perform the selected test file on a single firefox instance

Logs are stored in "logs" folder

Logs format modified: colors and some additional info added

First test of both test files is performed if GlobalProtect is connected and 'vpn-eu.epam.com' gateway is selected