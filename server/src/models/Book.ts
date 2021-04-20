import { Schema, model, Document } from "mongoose";
import { IBaseUser } from "./BaseUser";

type DataSheet = {
  editorial: String;
  language: String;
  pages: Number;
};

type Ratio = {
  ratio: Number;
  comment: String;
  user: IBaseUser;
};

export interface IBook extends Document {
  title: string;
  author: string;
  isbn: string;
  coverPage: string;
  summary: string;
  dataSheet: DataSheet;
  libraries: Array<string>;
  solds: Number;
  rewards: Array<string>;
  ratio: Ratio[];
  isPublished: Boolean;
}

const BookSchema = new Schema(
  {
    title: String,
    author: String,
    isbn: String,
    coverPage: String,
    summary: String,
    category: [
      {
        ref: "Category",
        type: Schema.Types.ObjectId,
      },
    ],
    dataSheet: {
      editorial: String,
      language: String,
      pages: Number,
    },
    libraries: [
      {
        ref: "Library",
        type: Schema.Types.ObjectId,
      },
    ],
    solds: Number,
    rewards: [
      {
        ref: "Reward",
        type: Schema.Types.ObjectId,
      },
    ],
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
    isPublished: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IBook>("Book", BookSchema);
