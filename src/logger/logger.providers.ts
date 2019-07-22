import { Provider } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { getLoggerToken } from './logger.utils';

function loggerFactory(logger: LoggerService, prefix: string) {
  if (prefix) {
    logger.setPrefix(prefix);
  }
  return logger;
}

function createLoggerProvider(prefix: string): Provider<LoggerService> {
  return {
    provide: getLoggerToken(prefix),
    useFactory: logger => loggerFactory(logger, prefix),
    inject: [LoggerService],
  };
}

/**
 * Creates Logger providers for each given prefix
 */
export function createLoggerProviders(prefixes: string[]): Array<Provider<LoggerService>> {
  return prefixes.map(prefix => createLoggerProvider(prefix));
}
