import { IPjAccountRepository } from '@/domain/repositories';
import { DeletePjAccountUseCase } from '@/usecases';
import { DeletePjAccountController } from './Delete-pj-account-controller';
import { mock } from 'jest-mock-extended';
import { PjAccountNotFoundError } from '@/domain/errors';

const makeSut = () => {
  const repo = mock<IPjAccountRepository>();
  const useCase = new DeletePjAccountUseCase(repo);
  const controller = new DeletePjAccountController(useCase);
  return { repo, controller };
};

describe('delete pj account controller', () => {
  it('should get http 200 on delete pj account', async () => {
    const { controller } = makeSut();
    const response = await controller.handle({
      params: {
        id: '1',
      },
    });

    expect(response.statusCode).toBe(200);
  });

  it('should get http 404 on Delete a unknow pj account', async () => {
    const { controller, repo } = makeSut();
    repo.update.mockReturnValueOnce(
      Promise.resolve(new PjAccountNotFoundError()),
    );

    const response = await controller.handle({
      params: {
        id: '1',
      },
    });

    expect(response.statusCode).toBe(404);
    expect(response.body.code).toBe(PjAccountNotFoundError.code);
    expect(response.body.message).toBe(PjAccountNotFoundError.message);
  });
});
