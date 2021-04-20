export const FocusInitialState = {
  title: false,
  author: false,
  isbn: false,
};

export const CheckInitialState = {
  ebook: false,
  tapaBlanda: false,
  tapaDura: false,
};

export const StockInitialState = {
  ebook: "",
  tapaBlanda: "",
  tapaDura: "",
};

export const PriceInitialState = {
  ebook: {
    offer: false,
    price: "",
    newPrice: "",
  },
  tapa_blanda: {
    offer: false,
    price: "",
    newPrice: "",
  },
  tapa_dura: {
    offer: false,
    price: "",
    newPrice: "",
  },
};

export const FormatPriceInitialState = {
  offer: false,
  price: "",
  newPrice: "",
};

export const BookInitialState = {
  title: "",
  author: "",
  isbn: "",
  summary: "",
  libraries: [],
};

export const UserProfileInitialState = {
  baseUser: "",
  user: "",
};

export const UserInitialState = {
  name: "",
  lastName: "",
  email: "",
  image: "",
  roles: [],
  bought: [],
  cart: [],
  wanted: [],
};

export const LibraryBookInitialState = {
  book: {
    coverPage: "",
    title: "",
    author: "",
    isbn: "",
  },
  stock: {
    tapaDura: {
      isOffered: false,
      stock: "",
      solds: "",
    },
    tapaBlanda: {
      isOffered: false,
      stock: "",
      solds: "",
    },
    ebook: {
      isOffered: false,
      stock: "",
      solds: "",
    },
  },
  price: {
    tapaDura: {
      offer: false,
      price: "",
      newPrice: "",
    },
    tapaBlanda: {
      offer: false,
      price: "",
      newPrice: "",
    },
    ebook: {
      offer: false,
      price: "",
      newPrice: "",
    },
  },
};

export const LibraryInitialState = {
  libraryName: "",
  cif: "",
  email: "",
  books: {
    stock: {
      ebook: {
        isOffered: false,
        stock: "",
        solds: "",
      },
      tapaBlanda: {
        isOffered: false,
        stock: "",
        solds: "",
      },
      tapaDura: {
        isOffered: false,
        stock: "",
        solds: "",
      },
    },
    price: {
      ebook: {
        offer: false,
        price: "",
        newPrice: "",
      },
      tapa_blanda: {
        offer: false,
        price: "",
        newPrice: "",
      },
      tapa_dura: {
        offer: false,
        price: "",
        newPrice: "",
      },
    },
  },
  image: "",
  address: {
    provincia: "",
    ciudad: "",
    calle: "",
    codigoPostal: "",
  },
  ratio: "",
  checks: {
    compraEnTienda: false,
    recogidaEnTienda: false,
    pedidos: false,
    aDomicilio: false,
  },
};
