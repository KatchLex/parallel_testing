const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console({ level: 'silly' }),
        new winston.transports.File({ filename: 'winston.log', level: 'debug'})
    ],
    format: winston.format.simple()
});

module.exports = logger;