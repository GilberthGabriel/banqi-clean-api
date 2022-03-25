import { IPjAccountRepository } from '@/domain/repositories';
import { mock } from 'jest-mock-extended';
import { ListPjAccountUseCase } from './list-pj-account-use-case';

const makeSut = () => {
  const repo = mock<IPjAccountRepository>();
  const useCase = new ListPjAccountUseCase(repo);
  return { repo, useCase };
};

describe('list pj account use-case', () => {
  it('should call repository.list method', async () => {
    const { useCase, repo } = makeSut();
    const spy = jest.spyOn(repo, 'list');
    await useCase.perform();
    expect(spy).toHaveBeenCalled();
  });
});
