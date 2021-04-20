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

export interface ILibraryBook {
  _id?: string;
  book: {
    coverPage?: string;
    title: string;
    author: string;
    isbn: string;
  };
  stock: Stock;
  price: Price;
}
