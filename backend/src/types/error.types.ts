import { HttpStatusCodeEnum } from '../enum/http.enum';

export interface IError {
  message: string;
  headers: Headers;
  status: HttpStatusCodeEnum;
}
