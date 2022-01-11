const winston = require('winston');
require('winston-daily-rotate-file');

const logger = winston.createLogger({
    level: 'silly',
    transports: [
        new winston.transports.Console({level: 'silly'}),
        new winston.transports.DailyRotateFile({
            filename: './logs/dailyLogger-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            level: 'debug'
        })
    ],
    format: winston.format.combine(
        winston.format.colorize({
            all:true
        }),
        winston.format.label({
            label:'[LOGGER]'
        }),
        winston.format.timestamp({
            format:'YY-MM-DD HH:MM:SS'
        }),
        winston.format.printf(
            info => `${info.label} ${info.timestamp} ${info.level} : ${info.message}`
        )
    ),
});

module.exports = logger;