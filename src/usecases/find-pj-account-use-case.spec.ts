import { PjAccountNotFoundError } from '@/domain/errors';
import { IPjAccountRepository } from '@/domain/repositories';
import { mock } from 'jest-mock-extended';
import { FindPjAccountUseCase } from './find-pj-account-use-case';

const makeSut = () => {
  const repo = mock<IPjAccountRepository>();
  const useCase = new FindPjAccountUseCase(repo);
  return { repo, useCase };
};

describe('find pj account use-case', () => {
  it('should call repository.find method', async () => {
    const { useCase, repo } = makeSut();
    const spy = jest.spyOn(repo, 'find');
    await useCase.perform({ id: '1' });
    expect(spy).toHaveBeenCalled();
  });

  it('should return not found error', async () => {
    const { useCase, repo } = makeSut();
    repo.find.mockReturnValueOnce(
      Promise.resolve(new PjAccountNotFoundError()),
    );

    const response = await useCase.perform({ id: '1' });
    expect(response).toBeInstanceOf(PjAccountNotFoundError);
  });
});
