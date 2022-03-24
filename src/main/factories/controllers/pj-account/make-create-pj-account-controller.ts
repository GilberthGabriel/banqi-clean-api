import { PrismaClient } from '@prisma/client';
import { PrismaPjAccountRepository } from '@/external/db/prisma/repositories';
import { CreatePjAccountController } from '@/presentation/controllers/pj-account';
import { CreatePjAccountUseCase } from '@/usecases';

export const makeCreatePjAccountController = (): CreatePjAccountController => {
  const prisma = new PrismaClient();
  const repo = new PrismaPjAccountRepository(prisma);
  const useCase = new CreatePjAccountUseCase(repo);
  return new CreatePjAccountController(useCase);
};
