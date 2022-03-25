import { Router } from 'express';
import { adaptRoute } from '@/main/adapters';
import {
  makeCreatePjAccountController,
  makeUpdatePjAccountController,
  makeFindPjAccountController,
} from '@/main/factories/controllers/pj-account';

export const pjAccountRoutes = (router: Router): Router => {
  router.get('/', adaptRoute(makeFindPjAccountController()));
  router.post('/', adaptRoute(makeCreatePjAccountController()));
  router.put('/:id', adaptRoute(makeUpdatePjAccountController()));
  return router;
};
