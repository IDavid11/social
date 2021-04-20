export interface IBaseUser {
  _id?: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  roles?: [];
}
