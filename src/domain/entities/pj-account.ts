export type PjAccount = {
  id: string;
  createdAt: Date;
  name: string;
  cnpj: string;
  description: string;
  address: string;
  revenue: number;
};

export type CreatePjAccountDto = {
  name: string;
  cnpj: string;
  description: string;
  address: string;
  revenue: number;
};

export type UpdatePjAccountDto = {
  name?: string;
  cnpj?: string;
  description?: string;
  address?: string;
  revenue?: number;
};