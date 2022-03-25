import { CreatePjAccountDto, PjAccount } from 'domain/entities';

interface IMakeFakePjAccountDto {
  name?: string;
  cnpj?: string;
  description?: string;
  address?: string;
  revenue?: number;
}

export function makeFakePjAccountDto(
  data: IMakeFakePjAccountDto = {},
): CreatePjAccountDto {
  return {
    name: data.name || 'test',
    cnpj: data.cnpj || '12345678912',
    address: data.address || 'test',
    description: data.description || 'test',
    revenue: data.revenue || 0,
  };
}

export function makeFakePjAccount(data?: PjAccount): PjAccount {
  return {
    id: data ? data.id : '1',
    createdAt: data ? data.createdAt : new Date(),
    name: data ? data.name : 'test',
    cnpj: data ? data.cnpj : '12345678912',
    address: data ? data.address : 'test',
    description: data ? data.description : 'test',
    revenue: data ? data.revenue : 0,
  };
}
