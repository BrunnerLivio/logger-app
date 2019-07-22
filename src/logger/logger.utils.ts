/**
 * Creates the token for a logger with a prefix
 * @param prefix The prefix of the logger
 */
export const getLoggerToken = (prefix: string = ''): string =>
  `LoggerService${prefix}`;
