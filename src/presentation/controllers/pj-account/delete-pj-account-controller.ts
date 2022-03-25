import { PjAccountNotFoundError } from '@/domain/errors';
import {
  Controller,
  HttpRequest,
  HttpResponse,
  notFound,
  ok,
} from '@/presentation/utils';
import { DeletePjAccountUseCase } from '@/usecases';

export class DeletePjAccountController implements Controller {
  constructor(private readonly useCase: DeletePjAccountUseCase) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const response = await this.useCase.perform(request.params.id);
    if (response instanceof PjAccountNotFoundError) {
      return notFound({
        code: response.code,
        message: response.message,
      });
    }

    return ok(response);
  }
}
