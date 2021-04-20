import { Request, Response, NextFunction } from "express";
import Role from "../models/Role";
import User from "../models/BaseUser";

export const LibraryRoleValidation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user?.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "library") {
        next();
        return;
      }
    }
    return res.status(403).json({ message: "Library Role Required" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

export const ModeratorRoleValidation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user?.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "moderator") {
        next();
        return;
      }
    }
    return res.status(403).json({ message: "Moderator Role Required" });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
