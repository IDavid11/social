import { Schema, model, Document } from "mongoose";
import { IBook } from "./Book";
import { IBaseUser } from "./BaseUser";

interface T {
  library: String;
  price: Number;
  stock: Array<String>;
}

interface Ratio {
  ratio: Number;
  user: IBaseUser;
}

export interface IAuthor extends Document {
  name: string;
  bibliography?: string;
  books: IBook[];
  ratio: Ratio[];
  followers: Array<string>;
}

const AuthorSchema = new Schema(
  {
    name: String,
    bibliography: String,
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
    books: [
      {
        ref: "IBook",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IAuthor>("Author", AuthorSchema);
