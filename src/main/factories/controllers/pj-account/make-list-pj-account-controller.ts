import { PrismaClient } from '@prisma/client';
import { PrismaPjAccountRepository } from '@/external/db/prisma/repositories';
import { ListPjAccountController } from '@/presentation/controllers/pj-account';
import { ListPjAccountUseCase } from '@/usecases';

export const makeListPjAccountController = (): ListPjAccountController => {
  const prisma = new PrismaClient();
  const repo = new PrismaPjAccountRepository(prisma);
  const useCase = new ListPjAccountUseCase(repo);
  return new ListPjAccountController(useCase);
};
