import {
  CreatePjAccountDto,
  PjAccount,
  UpdatePjAccountDto,
} from '@/domain/entities';
import { DuplicatedCnpjError, PjAccountNotFoundError } from '@/domain/errors';
import { IPjAccountRepository } from '@/domain/repositories';
import { PjAccount as PrismaPjAccount, PrismaClient } from '@prisma/client';

const adptPjAccount = (data: PrismaPjAccount): PjAccount => {
  return {
    ...data,
    revenue: Number(data.revenue),
  };
};

export class PrismaPjAccountRepository implements IPjAccountRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(
    data: CreatePjAccountDto,
  ): Promise<PjAccount | DuplicatedCnpjError> {
    try {
      const account = await this.prisma.pjAccount.create({ data });
      return adptPjAccount(account);
    } catch (e) {
      return new DuplicatedCnpjError();
    }
  }

  async update(
    data: UpdatePjAccountDto,
  ): Promise<PjAccount | PjAccountNotFoundError> {
    try {
      const account = await this.prisma.pjAccount.update({
        where: { id: data.id },
        data,
      });

      return adptPjAccount(account);
    } catch (e) {
      return new PjAccountNotFoundError();
    }
  }
}
