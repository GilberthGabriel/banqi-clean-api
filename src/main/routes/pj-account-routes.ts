import { Router } from 'express';
import { adaptRoute } from '@/main/adapters';
import {
  makeCreatePjAccountController,
  makeUpdatePjAccountController,
  makeFindPjAccountController,
  makeListPjAccountController,
} from '@/main/factories/controllers/pj-account';

export const pjAccountRoutes = (router: Router): Router => {
  router.get('/find', adaptRoute(makeFindPjAccountController()));
  router.get('/', adaptRoute(makeListPjAccountController()));
  router.post('/', adaptRoute(makeCreatePjAccountController()));
  router.put('/:id', adaptRoute(makeUpdatePjAccountController()));
  return router;
};
