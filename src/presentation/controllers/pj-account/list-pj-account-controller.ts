import { Controller, HttpResponse, ok } from '@/presentation/utils';
import { ListPjAccountUseCase } from '@/usecases';

export class ListPjAccountController implements Controller {
  constructor(private readonly useCase: ListPjAccountUseCase) {}

  async handle(): Promise<HttpResponse> {
    const response = await this.useCase.perform();
    return ok(response);
  }
}
