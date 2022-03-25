import { IPjAccountRepository } from '@/domain/repositories';
import { FindPjAccountUseCase } from '@/usecases';
import { makeFakePjAccount } from '@/../tests/helper';
import { FindPjAccountController } from './find-pj-account-controller';
import { mock } from 'jest-mock-extended';
import { PjAccountNotFoundError } from '@/domain/errors';

const makeSut = () => {
  const repo = mock<IPjAccountRepository>();
  const useCase = new FindPjAccountUseCase(repo);
  const controller = new FindPjAccountController(useCase);
  return { repo, controller };
};

describe('find pj account controller', () => {
  it('should get http 200 on find pj account', async () => {
    const { controller, repo } = makeSut();
    const account = makeFakePjAccount();
    repo.find.mockReturnValueOnce(Promise.resolve(account));
    const response = await controller.handle({
      query: {
        cnpj: '123',
      },
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(account);
  });

  it('should get http 404 on find a unknow pj account', async () => {
    const { controller, repo } = makeSut();
    repo.find.mockReturnValueOnce(
      Promise.resolve(new PjAccountNotFoundError()),
    );

    const response = await controller.handle({
      query: {
        cnpj: '123',
      },
    });

    expect(response.statusCode).toBe(404);
    expect(response.body.code).toBe(PjAccountNotFoundError.code);
    expect(response.body.message).toBe(PjAccountNotFoundError.message);
  });
});
