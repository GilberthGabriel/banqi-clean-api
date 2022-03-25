export type PjAccount = {
  id: string;
  createdAt: Date;
  deletedAt?: Date;
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
  id: string;
  name?: string;
  description?: string;
  address?: string;
  revenue?: number;
  deletedAt?: Date | null;
};

export type FindPjAccountDto = {
  id?: string;
  cnpj?: string;
};
