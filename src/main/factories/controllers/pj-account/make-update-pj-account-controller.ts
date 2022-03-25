import { PrismaClient } from '@prisma/client';
import { PrismaPjAccountRepository } from '@/external/db/prisma/repositories';
import { UpdatePjAccountController } from '@/presentation/controllers/pj-account';
import { UpdatePjAccountUseCase } from '@/usecases';

export const makeUpdatePjAccountController = (): UpdatePjAccountController => {
  const prisma = new PrismaClient();
  const repo = new PrismaPjAccountRepository(prisma);
  const useCase = new UpdatePjAccountUseCase(repo);
  return new UpdatePjAccountController(useCase);
};
