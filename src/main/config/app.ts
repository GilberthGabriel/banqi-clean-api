import express from 'express';
import setupMiddlewares from './setup-middlewares';
import setupRoutes from './setup-routes';
import swagger from './swagger';

const app = express();
setupMiddlewares(app);
setupRoutes(app);
swagger(app);

export default app;
