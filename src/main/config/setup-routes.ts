import { Express, Router } from 'express';

export default (app: Express): void => {
  const apiRouter = Router();
  app.use('/api', apiRouter);
};
