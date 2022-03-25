import { CreatePjAccountDto, PjAccount } from '@/domain/entities';
import { DuplicatedCnpjError } from '@/domain/errors';
import { IPjAccountRepository } from '@/domain/repositories';
import { PrismaClient } from '@prisma/client';

export class PrismaPjAccountRepository implements IPjAccountRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(
    data: CreatePjAccountDto,
  ): Promise<PjAccount | DuplicatedCnpjError> {
    try {
      const account = await this.prisma.pjAccount.create({ data });
      return {
        ...account,
        revenue: Number(account.revenue),
      };
    } catch (e) {
      return new DuplicatedCnpjError();
    }
  }
}
