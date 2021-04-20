import mongoose from "mongoose";
import { config } from "dotenv";

config();

mongoose.connect(
  "mongodb://localhost/library",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => console.log("Connected to DB!")
);
