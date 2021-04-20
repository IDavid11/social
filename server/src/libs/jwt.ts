import { Response } from "express";
import jwt from "jsonwebtoken";

export const generateToken = (res: Response, _id: string) => {
  const expiration = 600000000;
  const token = jwt.sign({ _id }, process.env.TOKEN_SECRET || "", {
    expiresIn: expiration,
  });
  //return res.header("Authorization", `Bearer ${token}`);
  return token;
};
