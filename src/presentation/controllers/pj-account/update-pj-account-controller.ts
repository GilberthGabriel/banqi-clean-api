import { PjAccountNotFoundError } from '@/domain/errors';
import {
  Controller,
  HttpRequest,
  HttpResponse,
  notFound,
  ok,
} from '@/presentation/utils';
import { UpdatePjAccountUseCase } from '@/usecases';

export class UpdatePjAccountController implements Controller {
  constructor(private readonly useCase: UpdatePjAccountUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const response = await this.useCase.perform({
      id: request.params.id,
      name: request.body.name,
      description: request.body.description,
      address: request.body.address,
      revenue: request.body.revenue,
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
