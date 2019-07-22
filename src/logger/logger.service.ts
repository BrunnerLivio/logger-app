import { Injectable, Scope } from '@nestjs/common';

@Injectable({
  scope: Scope.TRANSIENT,
})
export class LoggerService {
  private prefix?: string;

  /**
   * Logs a message to stdout with a prefix
   * if it has been set using `LoggerService.setPrefix`
   *
   * @param message The messsage to log
   */
  log(message: string) {
    let formattedMessage = message;

    if (this.prefix) {
      formattedMessage = `[${this.prefix}] ${message}`;
    }

    // tslint:disable:no-console
    console.log(formattedMessage);
  }

  /**
   * Set the prefix of every log message
   *
   * @param prefix The prefix which should be prepended before every log message
   */
  setPrefix(prefix: string) {
    this.prefix = prefix;
  }
}
