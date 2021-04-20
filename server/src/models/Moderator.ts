import { Schema, model, Document } from "mongoose";
import { IReport } from "./Report";
import { IUser } from "./BaseUser";

export interface IModerator extends Document {
  user: IUser;
  incidents: IReport;
  earn: Number;
}

const ModeratorSchema = new Schema(
  {
    user: {
      ref: "User",
      type: Schema.Types.ObjectId,
    },
    incidents: {
      ref: "Report",
      type: Schema.Types.ObjectId,
    },
    earn: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IModerator>("Moderator", ModeratorSchema);
