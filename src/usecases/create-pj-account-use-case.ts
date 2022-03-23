import { CreatePjAccountDto, PjAccount } from 'domain/entities';
import { IPjAccountRepository } from 'domain/repositories';
import { IUseCase } from './ports/use-case';

export class CreatePjAccountUseCase implements IUseCase {
  constructor(private readonly repo: IPjAccountRepository) {}

  perform(data: CreatePjAccountDto): Promise<PjAccount> {
    return this.repo.create(data);
  }
}
