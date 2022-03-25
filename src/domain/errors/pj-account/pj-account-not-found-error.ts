import { ApplicationError } from '../application-error';

export class PjAccountNotFoundError extends ApplicationError {
  constructor() {
    super({
      code: 'PJ04',
      message: 'Pj account not found',
    });
  }
}
