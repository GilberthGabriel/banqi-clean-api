import { IPjAccountRepository } from '@/domain/repositories';
import { UpdatePjAccountUseCase } from '@/usecases';
import { makeFakePjAccountDto } from '@/../tests/helper';
import { UpdatePjAccountController } from './update-pj-account-controller';
import { mock } from 'jest-mock-extended';

const makeSut = () => {
  const repo = mock<IPjAccountRepository>();
  const useCase = new UpdatePjAccountUseCase(repo);
  return new UpdatePjAccountController(useCase);
};

describe('update pj account controller', () => {
  it('should get http 200 on update pj account', async () => {
    const controller = makeSut();
    const response = await controller.handle({
      params: { id: '1' },
      body: makeFakePjAccountDto(),
    });

    expect(response.statusCode).toBe(200);
  });
});
