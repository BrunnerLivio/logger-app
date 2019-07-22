import { LoggerModule } from './logger.module';
import { Logger } from './logger.decorator';

describe('Logger (Decorator)', () => {
  it('should add the prefix to an array', () => {
    Logger('prefix');
    expect(LoggerModule.prefixesForLoggers).toEqual(['prefix']);
  });

  it('should not add duplicate prefix to an array', () => {
    Logger('prefix');
    Logger('prefix');
    expect(LoggerModule.prefixesForLoggers).toEqual(['prefix']);
  });
});
