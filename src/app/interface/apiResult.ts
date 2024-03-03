export interface ApiResult<Type> {
  message: string;
  data: Type;
  success: boolean;
}
