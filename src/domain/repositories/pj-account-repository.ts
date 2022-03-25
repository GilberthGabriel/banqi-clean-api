import { CreatePjAccountDto, PjAccount } from '@/domain/entities';
import { DuplicatedCnpjError } from '../errors';

export interface IPjAccountRepository {
  create(data: CreatePjAccountDto): Promise<PjAccount | DuplicatedCnpjError>;
}
