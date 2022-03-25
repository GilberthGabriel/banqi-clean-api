import {
  DuplicatedCnpjError,
  InsufficientRevenueError,
  InvalidCnpjError,
} from '@/domain/errors';
import { badRequest, conflict, created } from '@/presentation/utils';
import { Controller, HttpRequest, HttpResponse } from '@/presentation/utils';
import { CreatePjAccountUseCase } from '@/usecases';

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

    if (
      response instanceof InvalidCnpjError ||
      response instanceof InsufficientRevenueError
    ) {
      return badRequest({
        code: response.code,
        message: response.message,
      });
    }

    if (response instanceof DuplicatedCnpjError) {
      return conflict({
        code: response.code,
        message: response.message,
      });
    }

    return created(response);
  }
}
