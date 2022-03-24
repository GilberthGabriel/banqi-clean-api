import { ApplicationError } from '../application-error';

export class InvalidCnpjError extends ApplicationError {
  constructor() {
    super({
      code: 'PJ01',
      message: 'Invalid CNPJ',
    });
  }
}
