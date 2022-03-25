import { InsufficientRevenueError, InvalidCnpjError } from '@/domain/errors';
import { IPjAccountRepository } from '@/domain/repositories';
import { CreatePjAccountUseCase } from './create-pj-account-use-case';
import { mock } from 'jest-mock-extended';
import { makeFakePjAccountDto } from '@/../tests/helper';

const makeSut = () => {
  const repo = mock<IPjAccountRepository>();
  const useCase = new CreatePjAccountUseCase(repo);
  return { repo, useCase };
};

describe('create pj account use-case', () => {
  it('should not create account with revenue less than 0', async () => {
    const { useCase } = makeSut();
    const response = await useCase.perform(
      makeFakePjAccountDto({ revenue: -10 }),
    );

    expect(response).toBeInstanceOf(InsufficientRevenueError);
  });

  it('should call repository.create method', async () => {
    const { useCase, repo } = makeSut();
    const spy = jest.spyOn(repo, 'create');
    await useCase.perform(makeFakePjAccountDto());
    expect(spy).toBeCalled();
  });

  it('should not create account with invalid cnpj', async () => {
    const { useCase } = makeSut();
    const response = await useCase.perform(
      makeFakePjAccountDto({ cnpj: '123' }),
    );

    expect(response).toBeInstanceOf(InvalidCnpjError);
  });
});
