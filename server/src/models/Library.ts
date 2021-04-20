import { Schema, model, Document } from "mongoose";
import { IBook } from "./Book";
import { IUser } from "./User";

type Stock = {
  ebook: {
    isOffered: Boolean;
    stock: Number;
    solds: Number;
  };
  tapaBlanda: {
    isOffered: Boolean;
    stock: Number;
    solds: Number;
  };
  tapaDura: {
    isOffered: Boolean;
    stock: Number;
    solds: Number;
  };
};

type Price = {
  ebook: {
    offer: Boolean;
    price: Number;
    newPrice: Number;
  };
  tapaBlanda: {
    offer: Boolean;
    price: Number;
    newPrice: Number;
  };
  tapaDura: {
    offer: Boolean;
    price: Number;
    newPrice: Number;
  };
};

type Books = {
  book: IBook;
  stock: Stock;
  price: Price;
};

type Rewards = {
  verified: Boolean;
  best_ratio: Boolean;
  trust: Boolean;
};

type Checks = {
  compra_en_tienda: Boolean;
  recogida_en_tienda: Boolean;
  pedidos: Boolean;
  a_domicilio: Boolean;
};

type Address = {
  provincia: String;
  ciudad: String;
  calle: String;
  codigoPostal: Number;
};

type Ratio = {
  ratio: Number;
  comment: String;
  user: IUser;
};

export interface ILibrary extends Document {
  baseUserId: string;
  nif: string; // SE A APP CRECE HABILITARASE "FRANCHISE" E AÑADIRANSE AS LIBRERÍAS QUE TEÑAN O MESMO NIF QUE A FRANQUICIA
  libraryName: string;
  image: string;
  books: Books[];
  address: Address;
  ratio: Ratio[];
  followers: Array<string>;
  checks: Checks;
  rewards: Rewards;
}

const LibrarySchema = new Schema(
  {
    baseUserId: { ref: "BaseUser", type: Schema.Types.ObjectId },
    nif: {
      type: String,
      required: true,
    },
    libraryName: {
      type: String,
      required: true,
    },
    image: String,
    books: [
      {
        book: {
          ref: "Book",
          type: Schema.Types.ObjectId,
        },
        stock: {
          tapaDura: {
            isOffered: Boolean,
            stock: Number,
            solds: Number,
          },
          tapaBlanda: {
            isOffered: Boolean,
            stock: Number,
            solds: Number,
          },
          ebook: {
            isOffered: Boolean,
            stock: Number,
            solds: Number,
          },
        },
        price: {
          tapaDura: {
            offer: Boolean,
            price: Number,
            newPrice: Number,
          },
          tapaBlanda: {
            offer: Boolean,
            price: Number,
            newPrice: Number,
          },
          ebook: {
            offer: Boolean,
            price: Number,
            newPrice: Number,
          },
        },
      },
    ],
    address: {
      provincia: String,
      ciudad: String,
      calle: String,
      codigoPostal: Number,
    },
    ratio: [
      {
        ratio: Number,
        comment: String,
        user: {
          ref: "User",
          type: Schema.Types.ObjectId,
        },
      },
    ],
    followers: [
      {
        user: {
          ref: "User",
          type: Schema.Types.ObjectId,
        },
      },
    ],
    checks: {
      compra_en_tienda: { type: Boolean, default: false },
      recogida_en_tienda: { type: Boolean, default: false },
      a_domicilio: { type: Boolean, default: false },
      pedidos: { type: Boolean, default: false },
    },
    rewards: {
      verified: { type: Boolean, default: false },
      best_ratio: { type: Boolean, default: false },
      trust: { type: Boolean, default: false },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<ILibrary>("Library", LibrarySchema);
