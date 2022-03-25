import { makeFakePjAccount } from '@/../tests/helper';
import { PjAccount } from '@/domain/entities';
import { PjAccountNotFoundError } from '@/domain/errors';
import { IPjAccountRepository } from '@/domain/repositories';
import { mock } from 'jest-mock-extended';
import { DeletePjAccountUseCase } from './delete-pj-account-use-case';

const makeSut = () => {
  const repo = mock<IPjAccountRepository>();
  const useCase = new DeletePjAccountUseCase(repo);
  return { repo, useCase };
};

describe('delete pj account use-case', () => {
  it('should call repository.update method', async () => {
    const { useCase, repo } = makeSut();
    const spy = jest.spyOn(repo, 'update');
    await useCase.perform('1');
    expect(spy).toHaveBeenCalled();
  });

  it('should return not found error', async () => {
    const { useCase, repo } = makeSut();
    repo.update.mockReturnValueOnce(
      Promise.resolve(new PjAccountNotFoundError()),
    );

    const response = await useCase.perform('1');
    expect(response).toBeInstanceOf(PjAccountNotFoundError);
  });
});
