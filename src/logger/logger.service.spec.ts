import { Test, TestingModule } from '@nestjs/testing';
import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggerService],
    }).compile();
    service = module.get<LoggerService>(LoggerService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('log', () => {
    beforeEach(() => {
      global.console.log = jest.fn();
    });

    it('should log a message', () => {
      service.log('Hello World');
      expect(global.console.log).toHaveBeenCalledWith('Hello World');
    });

    it('should log a message with a prefix', () => {
      service.setPrefix('AppService');
      service.log('Hello World');
      expect(global.console.log).toHaveBeenCalledWith('[AppService] Hello World');
    });
  });
});
