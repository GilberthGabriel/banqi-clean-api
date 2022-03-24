import { InsufficientRevenueError, InvalidCnpjError } from 'domain/errors';
import { badRequest, created } from 'presentation/utils';
import { Controller, HttpRequest, HttpResponse } from 'presentation/utils';
import { CreatePjAccountUseCase } from 'usecases';

export class CreatePjAccountController implements Controller {
  constructor(private readonly useCase: CreatePjAccountUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const response = await this.useCase.perform({
      name: request.body.name,
      cnpj: request.body.cnpj,
      description: request.body.description,
      address: request.body.address,
      revenue: request.body.revenue,
    });

    if (response instanceof InvalidCnpjError) {
      return badRequest({
        message: 'cannot create pj account with an invalid cnpj',
      });
    }

    if (response instanceof InsufficientRevenueError) {
      return badRequest({
        message: 'cannot create pj account with revenue less than 0',
      });
    }

    return created(response);
  }
}
