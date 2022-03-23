import { CreatePjAccountDto, PjAccount } from 'domain/entities';
import { IPjAccountRepository } from 'domain/repositories';
import { CreatePjAccountUseCase } from './create-pj-account-use-case';

class FakePjAccountRepository implements IPjAccountRepository {
  private readonly accounts: PjAccount[] = [];

  async create(data: CreatePjAccountDto): Promise<PjAccount> {
    const account: PjAccount = {
      ...data,
      createdAt: new Date(),
      id: '1',
    };

    this.accounts.push(account);
    return account;
  }
}

describe('create pj account usecase', () => {
  it('should call repository.create method', async () => {
    const repo = new FakePjAccountRepository();
    const useCase = new CreatePjAccountUseCase(repo);
    const spy = jest.spyOn(repo, 'create');
    const account: CreatePjAccountDto = {
      name: 'test',
      address: 'test',
      description: 'test',
      cnpj: '123456789',
      revenue: 0,
    };

    await useCase.perform(account);
    expect(spy).toBeCalledWith(account);
  });
});
