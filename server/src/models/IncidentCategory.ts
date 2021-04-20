import { Schema, model, Document } from "mongoose";

export interface IIncidentCategory extends Document {
  categoryName: string;
}

const IncidentCategorySchema = new Schema(
  {
    categoryName: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IIncidentCategory>("IncidentCategory", IncidentCategorySchema);
