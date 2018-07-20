'use strict';

const readline = require('readline-sync');
const log4js = require('log4js');
const logger = log4js.getLogger('logs\\debug.log');

// Logging config
log4js.configure({
    appenders: {
        file: { type: 'fileSync', filename: 'logs\\debug.log', level: 'debug' } ,
        console: { type: 'console'},
        severity : { type: 'logLevelFilter', appender: 'console', level: 'warn'}
    },
    categories: {
        default: { appenders: ['file', 'severity'], level: 'debug'}
    }
 });