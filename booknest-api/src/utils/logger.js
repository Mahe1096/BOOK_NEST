const winston = require('winston');
require('winston-daily-rotate-file');

// Define custom formats
const { combine, timestamp, printf, errors, json } = winston.format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

// Daily rotation for all logs
const transportInfo = new winston.transports.DailyRotateFile({
  filename: 'logs/app-info-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  level: 'info',
  maxFiles: '14d',
  zippedArchive: true,
});

const transportError = new winston.transports.DailyRotateFile({
  filename: 'logs/app-error-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  level: 'error',
  maxFiles: '30d',
  zippedArchive: true,
});


const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    errors({ stack: true }),
    json() 
  ),
  transports: [transportInfo, transportError],
});


module.exports = logger;
