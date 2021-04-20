import { Schema, model, Document } from "mongoose";
import { IBook } from "./Book";

export interface ICategory extends Document {
  categoryName: string;
  books: IBook[];
}

const CategorySchema = new Schema(
  {
    categoryName: String,
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

export default model<ICategory>("Category", CategorySchema);
