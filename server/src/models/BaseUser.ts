import { Schema, model, Document } from "mongoose";

export interface IBaseUser extends Document {
  email: string;
  password: string;
  roles: Array<string>;
  isEmailVerified: Boolean;
}

const BaseUserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      },
    ],
    isEmailVerified: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IBaseUser>("BaseUser", BaseUserSchema);
