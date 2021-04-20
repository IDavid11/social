import { IUser } from "./IUser";

type Stock = {
  tapaDura?: {
    isOffered: boolean;
    stock: string;
  };
  tapaBlanda?: {
    isOffered: boolean;
    stock: string;
  };
  ebook?: {
    isOffered: boolean;
    stock: string;
  };
};

type Price = {
  tapaDura?: {
    offer: boolean;
    price: string;
    newPrice: string;
  };
  tapaBlanda?: {
    offer: boolean;
    price: string;
    newPrice: string;
  };
  ebook?: {
    offer: boolean;
    price: string;
    newPrice: string;
  };
};

type Library = {
  library?: string;
  price?: Price;
  stock?: Stock;
};

type Ratio = {
  ratio: string;
  user: IUser;
};

export interface IBook {
  title: string;
  author: string;
  isbn: string;
  summary: string;

  ratio?: Ratio[];
  _id?: string;
  coverPage?: string;

  libraries?: Library[];
}
