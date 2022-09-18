import { NextFunction, Response } from 'express';

import { IRequestExtended } from '../types/request.types';

export function createDataContextMiddleware(req: IRequestExtended, _: Response, next: NextFunction) {
  req.data = {};

  next();
}
