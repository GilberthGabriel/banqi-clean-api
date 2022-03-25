import { UpdatePjAccountDto, PjAccount } from '@/domain/entities';
import { PjAccountNotFoundError } from '@/domain/errors';
import { IPjAccountRepository } from '@/domain/repositories';
import { IUseCase } from './ports';

export class UpdatePjAccountUseCase implements IUseCase {
  constructor(private readonly repo: IPjAccountRepository) {}

  async perform(
    data: UpdatePjAccountDto,
  ): Promise<PjAccount | PjAccountNotFoundError> {
    return await this.repo.update(data);
  }
}
