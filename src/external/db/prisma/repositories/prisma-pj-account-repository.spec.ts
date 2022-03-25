import { PrismaClient } from '@prisma/client';
import { PrismaPjAccountRepository } from './prisma-pj-account-repository';
import { mockDeep } from 'jest-mock-extended';
import { makeFakePjAccountDto } from '@/../tests/helper';

describe('prisma pj account repository', () => {
  it('should call prisma create method', async () => {
    const client = mockDeep<PrismaClient>();
    const spy = jest.spyOn(client.pjAccount, 'create');
    const repo = new PrismaPjAccountRepository(client);
    await repo.create(makeFakePjAccountDto());
    expect(spy).toBeCalled();
  });

  it('should call prisma update method', async () => {
    const client = mockDeep<PrismaClient>();
    const spy = jest.spyOn(client.pjAccount, 'update');
    const repo = new PrismaPjAccountRepository(client);
    await repo.update({
      id: '1',
      ...makeFakePjAccountDto(),
    });
    expect(spy).toBeCalled();
  });

  it('should call prisma findUnique method', async () => {
    const client = mockDeep<PrismaClient>();
    const spy = jest.spyOn(client.pjAccount, 'findUnique');
    const repo = new PrismaPjAccountRepository(client);
    await repo.find({ id: '1' });
    expect(spy).toBeCalled();
  });
});
