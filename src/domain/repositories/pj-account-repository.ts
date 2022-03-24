import { CreatePjAccountDto, PjAccount } from '@/domain/entities';

export interface IPjAccountRepository {
  create(data: CreatePjAccountDto): Promise<PjAccount>;
}
