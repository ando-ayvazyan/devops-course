import { Response, NextFunction } from 'express';

import { IError } from '../types/error.types';
import { IRequestExtended } from '../types/request.types';
import { HttpStatusCodeEnum } from '../enum/http.enum';

export function clientErrorHandlerMiddleware(error: IError, _: IRequestExtended, res: Response, next: NextFunction) {
  if (!error) {
    return next();
  }

  const { message, headers, status = HttpStatusCodeEnum.InternalError } = error;

  if (headers) {
    for (const [ headerName, headerValue ] of Object.entries(headers)) {
      res.setHeader(headerName, headerValue);
    }
  }

  res
    .status(status)
    .send({ error: message });
}
