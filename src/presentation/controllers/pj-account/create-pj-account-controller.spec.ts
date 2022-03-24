import {
  CreatePjAccountDto,
  PjAccount,
  UpdatePjAccountDto,
} from '@/domain/entities';
import { IPjAccountRepository } from '@/domain/repositories';
import { CreatePjAccountUseCase } from '@/usecases';
import { CreatePjAccountController } from './create-pj-account-controller';

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
  return new CreatePjAccountController(useCase);
};

const makePjAccount = (data: UpdatePjAccountDto = {}) => ({
  name: data.name || 'test',
  cnpj: data.cnpj || '12345678912',
  address: data.address || 'test',
  description: data.description || 'test',
  revenue: data.revenue || 0,
});

describe('create pj account controller', () => {
  it('should get http 204 on create pj account', async () => {
    const controller = makeSut();
    const response = await controller.handle({ body: makePjAccount() });
    expect(response.statusCode).toBe(201);
  });

  it('should get http 400 on create pj account with invalid cnpj', async () => {
    const controller = makeSut();
    const response = await controller.handle({
      body: makePjAccount({ cnpj: '123' }),
    });

    expect(response.statusCode).toBe(400);
  });

  it('should get http 400 on create pj account with negative revenue', async () => {
    const controller = makeSut();
    const response = await controller.handle({
      body: makePjAccount({ revenue: -1 }),
    });

    expect(response.statusCode).toBe(400);
  });
});
