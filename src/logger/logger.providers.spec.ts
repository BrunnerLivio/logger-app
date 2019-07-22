import { createLoggerProviders } from './logger.providers';
import { LoggerService } from './logger.service';

describe('createLoggerProviders', () => {
  it('should create logger providers with prefixes', () => {
    const providers = createLoggerProviders(['Prefix']);

    expect(providers).toEqual([
      {
        provide: 'LoggerServicePrefix',
        useFactory: expect.any(Function),
        inject: expect.anything(),
      },
    ]);
  });
  it('should call "setPrefix" on useFactory', () => {
    const loggerServiceMock = {
      setPrefix: jest.fn(),
    };
    const providers = createLoggerProviders(['Prefix']);

    (providers[0] as any).useFactory(loggerServiceMock, 'Prefix');
    expect(loggerServiceMock.setPrefix).toHaveBeenCalledWith('Prefix');
  });
});
