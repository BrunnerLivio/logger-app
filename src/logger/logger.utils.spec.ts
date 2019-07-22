import { getLoggerToken } from './logger.utils';

describe('getLoggerToken', () => {
  it('should return "LoggerService" if no prefix is given', () => {
    expect(getLoggerToken()).toBe('LoggerService');
  });

  it('should return "LoggerServicePrefix" if "Prefix" is given', () => {
    expect(getLoggerToken('Prefix')).toBe('LoggerServicePrefix');
  });
});
