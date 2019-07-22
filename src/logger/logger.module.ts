import { DynamicModule } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { createLoggerProviders } from './logger.providers';

export class LoggerModule {
  static prefixesForLoggers: string[] = new Array<string>();
  static forRoot(): DynamicModule {
    const prefixedLoggerProviders = createLoggerProviders(this.prefixesForLoggers);
    return {
      module: LoggerModule,
      providers: [LoggerService, ...prefixedLoggerProviders],
      exports: [LoggerService, ...prefixedLoggerProviders],
    };
  }
}
