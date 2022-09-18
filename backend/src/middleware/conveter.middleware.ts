import { NextFunction, Response } from 'express';

import { IRequestExtended } from '../types/request.types';
import { HttpStatusCodeEnum } from '../enum/http.enum';

export function validateAndExtractDigitsParamMiddleware(req: IRequestExtended, res: Response, next: NextFunction, digits: string) {
  if (!digits.match(/^\d+$/)) {

    return next({
      status: HttpStatusCodeEnum.BadRequest,
      message: `Invalid value of parameter 'digits' = '${digits}'`
    });
  }

  if (Number(digits) > Number.MAX_SAFE_INTEGER) {
    return next({
      status: HttpStatusCodeEnum.BadRequest,
      message: `Invalid value of parameter 'digits' = '${digits}'. The limit of maximum safe integer was exceeded`
    });
  }

  req.data.digits = digits;

  next();
}
