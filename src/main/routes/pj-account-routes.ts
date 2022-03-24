import { Router } from 'express';
import { adaptRoute } from '@/main/adapters';
import { makeCreatePjAccountController } from '@/main/factories/controllers/pj-account';

export const pjAccountRoutes = (router: Router): Router => {
  router.post('/', adaptRoute(makeCreatePjAccountController()));
  return router;
};
