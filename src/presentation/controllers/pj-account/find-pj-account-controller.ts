import { PjAccountNotFoundError } from '@/domain/errors';
import {
  Controller,
  HttpRequest,
  HttpResponse,
  notFound,
  ok,
} from '@/presentation/utils';
import { FindPjAccountUseCase } from '@/usecases';

export class FindPjAccountController implements Controller {
  constructor(private readonly useCase: FindPjAccountUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const response = await this.useCase.perform({
      id: request.query.id,
      cnpj: request.query.cnpj,
    });

    if (response instanceof PjAccountNotFoundError) {
      return notFound({
        code: response.code,
        message: response.message,
      });
    }

    return ok(response);
  }
}
