import { PrismaClient } from '@prisma/client';
import { PrismaPjAccountRepository } from '@/external/db/prisma/repositories';
import { DeletePjAccountController } from '@/presentation/controllers/pj-account';
import { DeletePjAccountUseCase } from '@/usecases';

export const makeDeletePjAccountController = (): DeletePjAccountController => {
  const prisma = new PrismaClient();
  const repo = new PrismaPjAccountRepository(prisma);
  const useCase = new DeletePjAccountUseCase(repo);
  return new DeletePjAccountController(useCase);
};
