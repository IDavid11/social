import { Schema, model, Document } from "mongoose";
import { ILibrary } from "./Library";
import { IModerator } from "./Moderator";
import { IBaseUser } from "./BaseUser";

type Priority = {
  VeryHigh: Boolean;
  High: Boolean;
  Medium: Boolean;
  Low: Boolean;
};

type Incident = {
  book: {
    bookId: String;
    description: String;
  };
  comment: {
    commentId: String;
    description: String;
  };
};

export interface IReport extends Document {
  incident: Incident;
  user: IBaseUser[];
  priority: Priority;
  done: Boolean;
  moderator: IModerator;
}

const ReportSchema = new Schema(
  {
    incident: {
      book: {
        bookId: {
          ref: "IBook",
          type: Schema.Types.ObjectId,
        },
        description: String,
      },
      comment: {
        commentId: {
          ref: "Comment",
          type: Schema.Types.ObjectId,
        },
        // Engadir opcións de por que reportan o comentario
        description: String,
      },
      user: {
        userId: {
          ref: "BaseUser",
          type: Schema.Types.ObjectId,
        },
        description: String,
      },
    },
    user: {
      ref: "BaseUser",
      type: Schema.Types.ObjectId,
    },
    incidentCategory: {
      ref: "IncidentCategory",
      type: Schema.Types.ObjectId,
    },
    priority: {
      VeryHigh: Boolean,
      High: Boolean,
      Medium: Boolean,
      Low: Boolean,
    },
    done: Boolean,
    moderator: {
      ref: "Moderator",
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IReport>("Report", ReportSchema);
