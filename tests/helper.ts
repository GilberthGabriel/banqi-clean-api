interface IMakeFakePjAccountDto {
  name?: string;
  cnpj?: string;
  description?: string;
  address?: string;
  revenue?: number;
}

export function makeFakePjAccountDto(data: IMakeFakePjAccountDto = {}) {
  return {
    name: data.name || 'test',
    cnpj: data.cnpj || '12345678912',
    address: data.address || 'test',
    description: data.description || 'test',
    revenue: data.revenue || 0,
  };
}
