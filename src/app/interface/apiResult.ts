import { IUser } from "./user";

export interface ApiResult<Type> {
  message: string;
  msgError: string;
  data: Type;
  success: boolean;
}
export interface AuthResult<IUser> {
  message: string;
  msgError:string;
  access_token: string;
  refresh_token: string;
  user: IUser;
  success: boolean;
}
