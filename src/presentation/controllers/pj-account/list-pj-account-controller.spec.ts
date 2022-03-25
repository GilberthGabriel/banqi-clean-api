import { IPjAccountRepository } from '@/domain/repositories';
import { ListPjAccountUseCase } from '@/usecases';
import { makeFakePjAccount } from '@/../tests/helper';
import { ListPjAccountController } from './list-pj-account-controller';
import { mock } from 'jest-mock-extended';

const makeSut = () => {
  const repo = mock<IPjAccountRepository>();
  const useCase = new ListPjAccountUseCase(repo);
  const controller = new ListPjAccountController(useCase);
  return { repo, controller };
};

describe('list pj account controller', () => {
  it('should get http 200 on list pj accounts', async () => {
    const { controller, repo } = makeSut();
    const account = makeFakePjAccount();
    repo.list.mockReturnValueOnce(Promise.resolve([account]));
    const response = await controller.handle();
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body[0]).toEqual(account);
  });
});
