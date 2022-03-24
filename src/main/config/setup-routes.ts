import { Express, Router } from 'express';
import { pjAccountRoutes } from '@/main/routes';

export default (app: Express): void => {
  const apiRouter = Router();
  apiRouter.use('/pj-accounts', pjAccountRoutes(Router()));
  app.use('/api', apiRouter);
};
