import { IPjAccountRepository } from '@/domain/repositories';
import { mock } from 'jest-mock-extended';
import { makeFakePjAccountDto } from '@/../tests/helper';
import { UpdatePjAccountUseCase } from './update-pj-account-use-case';
import { PjAccountNotFoundError } from '@/domain/errors';

const makeSut = () => {
  const repo = mock<IPjAccountRepository>();
  const useCase = new UpdatePjAccountUseCase(repo);
  return { repo, useCase };
};

describe('update pj account use-case', () => {
  it('should call repository.update method', async () => {
    const { useCase, repo } = makeSut();
    const spy = jest.spyOn(repo, 'update');
    await useCase.perform({
      id: '1',
      ...makeFakePjAccountDto(),
    });

    expect(spy).toHaveBeenCalled();
  });

  it('should return not found error', async () => {
    const { useCase, repo } = makeSut();
    repo.update.mockReturnValueOnce(
      Promise.resolve(new PjAccountNotFoundError()),
    );

    const response = await useCase.perform({
      id: '1',
      ...makeFakePjAccountDto(),
    });

    expect(response).toBeInstanceOf(PjAccountNotFoundError);
  });
});
