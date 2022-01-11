const fsextra = require('fs-extra');
const path = require('path');

const logsLocation = path.resolve('./*');

fsextra.removeSync(logsLocation);