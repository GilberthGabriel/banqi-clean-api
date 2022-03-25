import { PrismaClient } from '@prisma/client';
import { PrismaPjAccountRepository } from '@/external/db/prisma/repositories';
import { FindPjAccountController } from '@/presentation/controllers/pj-account';
import { FindPjAccountUseCase } from '@/usecases';

export const makeFindPjAccountController = (): FindPjAccountController => {
  const prisma = new PrismaClient();
  const repo = new PrismaPjAccountRepository(prisma);
  const useCase = new FindPjAccountUseCase(repo);
  return new FindPjAccountController(useCase);
};
