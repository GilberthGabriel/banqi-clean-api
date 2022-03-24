import {
  CreatePjAccountDto,
  PjAccount,
  UpdatePjAccountDto,
} from '@/domain/entities';
import { InsufficientRevenueError, InvalidCnpjError } from '@/domain/errors';
import { IPjAccountRepository } from '@/domain/repositories';
import { CreatePjAccountUseCase } from './create-pj-account-use-case';

class FakeAccountRepository implements IPjAccountRepository {
  async create(data: CreatePjAccountDto): Promise<PjAccount> {
    return {
      ...data,
      id: '1',
      createdAt: new Date(),
    };
  }
}

const makeSut = () => {
  const repo = new FakeAccountRepository();
  const useCase = new CreatePjAccountUseCase(repo);
  return { repo, useCase };
};

const makePjAccount = (data: UpdatePjAccountDto = {}) => ({
  name: data.name || 'test',
  cnpj: data.cnpj || '12345678912',
  address: data.address || 'test',
  description: data.description || 'test',
  revenue: data.revenue || 0,
});

describe('create pj account use-case', () => {
  it('should not create account with revenue less than 0', async () => {
    const { useCase } = makeSut();
    const response = await useCase.perform(makePjAccount({ revenue: -10 }));
    expect(response).toBeInstanceOf(InsufficientRevenueError);
  });

  it('should call repository.create method', async () => {
    const { useCase, repo } = makeSut();
    const spy = jest.spyOn(repo, 'create');
    await useCase.perform(makePjAccount());
    expect(spy).toBeCalled();
  });

  it('should not create account with invalid cnpj', async () => {
    const { useCase } = makeSut();
    const response = await useCase.perform(makePjAccount({ cnpj: '123' }));
    expect(response).toBeInstanceOf(InvalidCnpjError);
  });
});
