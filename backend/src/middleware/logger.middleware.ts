import winston from 'winston';
import expressWinston from 'express-winston';
import { Application } from 'express';

export function loggerMiddleware(app: Application) {
  app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.cli(),
    msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}}',
    colorize: true,
  }));
}

export function errorLogger(app: Application) {
  const options = {
    console: {
      level: 'error',
      handleExceptions: true,
      json: false,
      colorize: true,
    },
  };
  app.use(expressWinston.errorLogger({
    transports: [
      new winston.transports.Console(options.console)
    ],
    format: winston.format.cli(),
    msg: 'HTTP {{req.method}} {{req.url}} {{err.status}} {{err.message}}',
  }));
}
