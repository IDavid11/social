import { IBook } from "./IBook";

type Stock = {
  tapaDura?: {
    isOffered: boolean;
    stock: string;
    solds: string;
  };
  tapaBlanda?: {
    isOffered: boolean;
    stock: string;
    solds: string;
  };
  ebook?: {
    isOffered: boolean;
    stock: string;
    solds: string;
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

type Book = {
  book?: IBook;
  stock: Stock;
  price: Price;
};

export interface ILibrary {
  libraryName?: string;

  _id?: string;
  cif?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  roles?: Array<string>;
  books?: Book;
  image?: string;
  description?: string;
  address?: {
    provincia: string;
    ciudad: string;
    calle: string;
    codigoPostal: string;
  };
  ratio?: string;
  checks?: {
    compraEnTienda: boolean;
    recogidaEnTienda: boolean;
    pedidos: boolean;
    aDomicilio: boolean;
  };
  createdAt?: Date;
  updatedAt?: Date;
}
