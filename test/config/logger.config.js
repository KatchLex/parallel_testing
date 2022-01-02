const winston = require('winston');
require('winston-daily-rotate-file');

// const transport = new winston.transports.DailyRotateFile({
//   filename: 'winstonLogger-%DATE%.log',
//   datePattern: 'YYYY-MM-DD-HH',
//   zippedArchive: true,
//   maxSize: '20m',
//   maxFiles: '14d'
// });

// transport.on('rotate'); 

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console({ level: 'silly' }),
        new winston.transports.DailyRotateFile({
            filename: 'dailyLogger-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            level: 'debug'
        })

        //new winston.transports.File({ filename: 'winston.log', level: 'debug'})
    ],
    format: winston.format.simple()
});

module.exports = logger;