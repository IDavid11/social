import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface IPayload {
  _id: string;
  iat: number;
}

export const TokenValidation = (req: Request, res: Response, next: NextFunction) => {
  try {
    const webToken = req.header("Authorization");
    const token = webToken?.split(" ")[1] || "pataca";
    if (!token) return res.status(401).json("Login is required");
    const payload = jwt.verify(token, process.env.TOKEN_SECRET || "") as IPayload;
    req.userId = payload._id;
    next();
  } catch (error) {
    res.status(400).json("Invalid Token");
  }
};
