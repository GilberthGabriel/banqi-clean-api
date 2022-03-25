import { FindPjAccountDto, PjAccount } from '@/domain/entities';
import { PjAccountNotFoundError } from '@/domain/errors';
import { IPjAccountRepository } from '@/domain/repositories';
import { IUseCase } from './ports';

export class FindPjAccountUseCase implements IUseCase {
  constructor(private readonly repo: IPjAccountRepository) {}

  async perform(
    data: FindPjAccountDto,
  ): Promise<PjAccount | PjAccountNotFoundError> {
    return await this.repo.find(data);
  }
}
