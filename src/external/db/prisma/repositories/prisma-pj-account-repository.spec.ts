import { PrismaClient } from '@prisma/client';
import { UpdatePjAccountDto } from 'domain/entities';
import { PrismaPjAccountRepository } from './prisma-pj-account-repository';
jest.mock('@prisma/client', () => {
  return {
    PrismaClient: function () {
      return {
        pjAccount: {
          create: makePjAccount,
        },
      };
    },
  };
});

const makePjAccount = (data: UpdatePjAccountDto = {}) => ({
  name: data.name || 'test',
  cnpj: data.cnpj || '12345678912',
  address: data.address || 'test',
  description: data.description || 'test',
  revenue: data.revenue || 0,
});

describe('prisma pj account repository', () => {
  it('should call prisma create method', async () => {
    const mock = new PrismaClient();
    const spy = jest.spyOn(mock.pjAccount, 'create');
    const repo = new PrismaPjAccountRepository(mock);
    await repo.create(makePjAccount());
    expect(spy).toBeCalled();
  });
});
