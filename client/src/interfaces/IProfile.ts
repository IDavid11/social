import { IBaseUser } from "./IBaseUser";
import { ILibrary } from "./ILibrary";
import { IUser } from "./IUser";

export interface IUserProfile {
  baseUser: IBaseUser;
  user: IUser;
}

export interface ILibraryProfile {
  baseUser: IBaseUser;
  library: ILibrary;
}
