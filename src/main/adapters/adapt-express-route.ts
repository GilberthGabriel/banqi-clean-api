import { Request, Response } from 'express';
import { Controller } from 'presentation/utils';

export async function adaptRoute(controller: Controller) {
  return () => async (req: Request, res: Response) => {
    try {
      const httpResponse = await controller.handle(req);
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'internal server error' });
    }
  };
}
