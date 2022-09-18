import { Router } from 'express';

import { converterDigitsToNumber } from '../controller/converter.controller';
import { validateAndExtractDigitsParamMiddleware } from '../middleware/conveter.middleware';

const routes: Router = Router();

const digitsParam = 'digits';

routes.param(digitsParam, validateAndExtractDigitsParamMiddleware);

routes.get(`/:${digitsParam}`, converterDigitsToNumber);

export default routes;
