import {
  CreatePjAccountDto,
  UpdatePjAccountDto,
  PjAccount,
} from '@/domain/entities';
import { DuplicatedCnpjError, PjAccountNotFoundError } from '../errors';

export interface IPjAccountRepository {
  create(data: CreatePjAccountDto): Promise<PjAccount | DuplicatedCnpjError>;
  update(data: UpdatePjAccountDto): Promise<PjAccount | PjAccountNotFoundError>;
}
