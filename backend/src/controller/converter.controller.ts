import { NextFunction, Response } from 'express';

import { IRequestExtended } from '../types/request.types';
import { digitsToWords } from '../services/converter.service';
import { HttpStatusCodeEnum } from '../enum/http.enum';

/**
 * Converts a given numeric string into a list of words based on request parameter [digits].
 * @param req
 * @param res
 */
export async function converterDigitsToNumber(req: IRequestExtended, res: Response, next: NextFunction) {
  const { digits } = req.data;

  try {
    const result = digitsToWords(digits);

    res.json(result);
  } catch (err) {
    next({ status: HttpStatusCodeEnum.InternalError, message: 'Something went wrong' });
  }
}
