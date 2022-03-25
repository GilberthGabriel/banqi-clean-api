import { ApplicationError } from '../application-error';

export class DuplicatedCnpjError extends ApplicationError {
  constructor() {
    super({
      code: 'PJ03',
      message: 'The provided cnpn is already registered',
    });
  }
}
