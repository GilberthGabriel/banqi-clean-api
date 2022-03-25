import { CreatePjAccountDto, PjAccount } from '@/domain/entities';
import {
  DuplicatedCnpjError,
  InsufficientRevenueError,
  InvalidCnpjError,
} from '@/domain/errors';
import { IPjAccountRepository } from '@/domain/repositories';
import { IUseCase } from './ports';

export class CreatePjAccountUseCase implements IUseCase {
  constructor(private readonly repo: IPjAccountRepository) {}

  async perform(
    data: CreatePjAccountDto,
  ): Promise<
    | PjAccount
    | InvalidCnpjError
    | InsufficientRevenueError
    | DuplicatedCnpjError
  > {
    if (data.cnpj.length !== 11) return new InvalidCnpjError();
    if (data.revenue < 0) return new InsufficientRevenueError();
    return await this.repo.create(data);
  }
}
