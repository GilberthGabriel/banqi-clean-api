import { CreatePjAccountDto, PjAccount } from '@/domain/entities';
import { IPjAccountRepository } from '@/domain/repositories';
import { PrismaClient } from '@prisma/client';

export class PrismaPjAccountRepository implements IPjAccountRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(data: CreatePjAccountDto): Promise<PjAccount> {
    const account = await this.prisma.pjAccount.create({ data });
    return {
      ...account,
      revenue: Number(account.revenue),
    };
  }
}
