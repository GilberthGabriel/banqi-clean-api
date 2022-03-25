import { PjAccount } from '@/domain/entities';
import { PjAccountNotFoundError } from '@/domain/errors';
import { IPjAccountRepository } from '@/domain/repositories';
import { IUseCase } from './ports';

export class DeletePjAccountUseCase implements IUseCase {
  constructor(private readonly repo: IPjAccountRepository) {}

  async perform(id: string): Promise<PjAccount | PjAccountNotFoundError> {
    return this.repo.update({
      id,
      deletedAt: new Date(),
    });
  }
}
