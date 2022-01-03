const winston = require('winston');
require('winston-daily-rotate-file');

const logger = winston.createLogger({
    level: 'silly',
    transports: [
        new winston.transports.Console({ level: 'silly' }),
        new winston.transports.DailyRotateFile({
            filename: 'dailyLogger-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            level: 'debug'
        })
    ],
    format: winston.format.simple()
});

module.exports = logger;