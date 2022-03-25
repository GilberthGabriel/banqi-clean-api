import { ApplicationError } from '../application-error';

export class PjAccountNotFoundError extends ApplicationError {
  public static readonly code: string = 'PJ04';
  public static readonly message: string = 'Pj account not found';

  constructor() {
    super({
      code: PjAccountNotFoundError.code,
      message: PjAccountNotFoundError.message,
    });
  }
}
