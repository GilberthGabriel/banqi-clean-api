import {
  CreatePjAccountDto,
  UpdatePjAccountDto,
  FindPjAccountDto,
  PjAccount,
} from '@/domain/entities';
import { DuplicatedCnpjError, PjAccountNotFoundError } from '../errors';

export interface IPjAccountRepository {
  create(data: CreatePjAccountDto): Promise<PjAccount | DuplicatedCnpjError>;
  update(data: UpdatePjAccountDto): Promise<PjAccount | PjAccountNotFoundError>;
  find(data: FindPjAccountDto): Promise<PjAccount | PjAccountNotFoundError>;
  list(): Promise<PjAccount[]>;
}
