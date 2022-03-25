import { PjAccount } from '@/domain/entities';
import { IPjAccountRepository } from '@/domain/repositories';
import { IUseCase } from './ports';

export class ListPjAccountUseCase implements IUseCase {
  constructor(private readonly repo: IPjAccountRepository) {}

  async perform(): Promise<PjAccount[]> {
    return await this.repo.list();
  }
}
