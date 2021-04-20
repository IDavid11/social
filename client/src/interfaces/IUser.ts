import { IBook } from "./IBook";

export interface IUser {
  _id?: string;
  name?: string;
  lastName?: string;
  image?: string;
  bought?: IBook[];
  cart?: IBook[];
  wanted?: IBook[];
  address?: {
    provincia?: string;
    ciudad?: string;
    pais?: string;
    codigoPostal?: string;
  };
  shippingAddresses?: [
    {
      name?: string;
      addressType?: string;
      address?: string;
      provincia?: string;
      ciudad?: string;
      codigoPostal?: string;
      pais?: string;
    }
  ];
}
