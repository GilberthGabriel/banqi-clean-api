import { ApplicationError } from '../application-error';

export class InsufficientRevenueError extends ApplicationError {
  constructor() {
    super({
      code: 'PJ02',
      message: 'Revenue cannot be less than 0',
    });
  }
}
