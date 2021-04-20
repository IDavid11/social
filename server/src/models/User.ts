import { Schema, model, Document, Types } from "mongoose";
import { IBook } from "./Book";

type Address = {
  provincia: String;
  ciudad: String;
  codigoPostal: Number;
  pais: String;
};

type ShippingAddresses = {
  _id: String;
  name: String;
  addressType: String;
  address: String;
  provincia: String;
  ciudad: String;
  codigoPostal: Number;
  pais: String;
};

type Rewards = {
  verified: Boolean;
  best_ratio: Boolean;
  trust: Boolean;
  reviewer: Boolean;
  success: Boolean;
};

type Preferences = {
  preference1: Boolean;
  preference2: Boolean;
  preference3: Boolean;
};

type Stats = {
  goals: [
    {
      goal: Number;
      progress: Number;
      year: Date;
    }
  ];
  favCategories: [
    {
      category: { ref: "Category"; type: Schema.Types.ObjectId };
      readBooks: Number;
      percent: Number;
    }
  ];
  favBooks: IBook[];
  readBooks: IBook[];
};

export interface IUser extends Document {
  baseUserId: string;
  name: string;
  lastName: string;
  image: String;
  address: Address;
  shippingAddresses: ShippingAddresses[];
  rewards: Rewards;
  bought: Array<string>;
  cart: Array<string>;
  wanted: Array<string>;
  stats: Stats;
  preferences: Preferences;
}

const UserSchema = new Schema(
  {
    baseUserId: { ref: "BaseUser", type: Schema.Types.ObjectId },
    name: String,
    lastName: String,
    image: String,
    address: {
      provincia: String,
      ciudad: String,
      codigoPostal: Number,
      pais: String,
    },
    shippingAddresses: [
      {
        name: String,
        addressType: String,
        address: String,
        provincia: String,
        ciudad: String,
        codigoPostal: Number,
        pais: String,
      },
    ],
    rewards: {
      verified: Boolean,
      best_ratio: Boolean,
      trust: Boolean,
      reviewer: Boolean,
      success: Boolean,
    },
    bought: [
      {
        bought: {
          ref: "Book",
          type: Schema.Types.ObjectId,
        },
        date: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    cart: [
      {
        ref: "Book",
        type: Schema.Types.ObjectId,
      },
    ],
    wanted: [
      {
        ref: "Book",
        type: Schema.Types.ObjectId,
      },
    ],
    stats: {
      goals: [
        {
          goal: Number,
          progress: Number,
          year: Date,
        },
      ],
      favCategories: [
        {
          category: { ref: "Category", type: Schema.Types.ObjectId },
          readBooks: Number,
          percent: Number,
        },
      ],
      favBooks: [{ ref: "Book", type: Schema.Types.ObjectId }],
      readBooks: [{ ref: "Book", type: Schema.Types.ObjectId }],
    },
    preferences: {
      preference1: Boolean,
      preference2: Boolean,
      preference3: Boolean,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IUser>("User", UserSchema);
