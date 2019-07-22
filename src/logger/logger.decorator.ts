import { Inject } from '@nestjs/common';
import { getLoggerToken } from './logger.utils';
import { LoggerModule } from './logger.module';

/**
 * Injects a `LoggerService`
 *
 * @param prefix Prefix which gets prepended before every log message
 */
export function Logger(prefix: string = '') {
  if (!LoggerModule.prefixesForLoggers.includes(prefix)) {
    LoggerModule.prefixesForLoggers.push(prefix);
  }
  return Inject(getLoggerToken(prefix));
}
