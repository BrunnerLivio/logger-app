import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { getLoggerToken } from './logger/logger.utils';
import { LoggerService } from './logger/logger.service';

describe('AppService', () => {
  let appService: AppService;
  const appServiceLoggerMock: LoggerService = {
    log: jest.fn(),
    setPrefix: jest.fn(),
  };
  let appServiceLogger: LoggerService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: getLoggerToken(AppService.name),
          useValue: appServiceLoggerMock,
        },
      ],
    }).compile();

    appService = app.get<AppService>(AppService);
    appServiceLogger = app.get<LoggerService>(getLoggerToken(AppService.name));
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      expect(appService.getHello()).toBe('Hello World!');
    });

    it('should log "Hello World"', () => {
      appService.getHello();
      expect(appServiceLogger.log).toHaveBeenCalledWith('Hello World');
    });
  });
});
