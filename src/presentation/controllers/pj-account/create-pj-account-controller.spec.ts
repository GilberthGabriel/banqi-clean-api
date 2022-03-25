import { IPjAccountRepository } from '@/domain/repositories';
import { CreatePjAccountUseCase } from '@/usecases';
import { CreatePjAccountController } from './create-pj-account-controller';
import { mock } from 'jest-mock-extended';
import { makeFakePjAccountDto } from '@/../tests/helper';

const makeSut = () => {
  const repo = mock<IPjAccountRepository>();
  const useCase = new CreatePjAccountUseCase(repo);
  return new CreatePjAccountController(useCase);
};

describe('create pj account controller', () => {
  it('should get http 204 on create pj account', async () => {
    const controller = makeSut();
    const response = await controller.handle({ body: makeFakePjAccountDto() });
    expect(response.statusCode).toBe(201);
  });

  it('should get http 400 on create pj account with invalid cnpj', async () => {
    const controller = makeSut();
    const response = await controller.handle({
      body: makeFakePjAccountDto({ cnpj: '123' }),
    });

    expect(response.statusCode).toBe(400);
  });

  it('should get http 400 on create pj account with negative revenue', async () => {
    const controller = makeSut();
    const response = await controller.handle({
      body: makeFakePjAccountDto({ revenue: -1 }),
    });

    expect(response.statusCode).toBe(400);
  });
});
