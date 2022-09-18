import type { Request } from 'express';

type NonReferenceDataType = number | string | boolean | undefined | null;
type CommonDataContextType = Record<string, NonReferenceDataType | Record<string, NonReferenceDataType>>;

interface IDigitsConverterDataContext {
  digits?: string;
}

type RequestDataContextType = IDigitsConverterDataContext & CommonDataContextType;

export interface IRequestExtended extends Request {
  data?: RequestDataContextType;
}
