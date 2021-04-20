import { Request, Response } from "express";
import Role from "../models/Role";
import bcrypt from "bcrypt";
import Library, { ILibrary } from "../models/Library";
import { generateToken } from "../libs/jwt";
import { uploadImage } from "../libs/upload";
import User, { IUser } from "../models/User";
import BaseUser, { IBaseUser } from "../models/BaseUser";

export const signin = async (req: Request, res: Response) => {
  const user = await BaseUser.findOne({ email: req.body.email });
  if (!user) return res.status(403).json("Invalid username or password");
  const cmp = await bcrypt.compare(req.body.password, user.password);
  if (!cmp) return res.status(403).json("Invalid username or password");
  const token = generateToken(res, user._id);
  return res.json({ user, token });
};

export const signup = async (req: Request, res: Response) => {
  const { name, lastName, email, password } = req.body;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    const newBaseUser: IBaseUser = new BaseUser({
      email: email,
      password: hashedPassword,
    });

    const newUser: IUser = new User({
      baseUserId: newBaseUser._id,
      name: name,
      lastName: lastName,
    });

    const role = await Role.findOne({ name: "user" });
    newBaseUser.roles = [role?._id];

    await newBaseUser.save();
    await newUser.save();
    const token = generateToken(res, newBaseUser._id);
    return res.json({ newBaseUser, token });
  } catch (e) {
    res.status(400).json(e);
  }
};

export const signupLibrary = async (req: Request, res: Response) => {
  const { libraryName, nif, email, password, provincia, ciudad, calle, codigoPostal } = req.body;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds); // Cambiar a model Library ??

  try {
    const newBaseUser: IBaseUser = new BaseUser({
      email: email,
      password: hashedPassword,
    });

    const newLibrary: ILibrary = new Library({
      baseUserId: newBaseUser._id,
      libraryName: libraryName,
      nif: nif,
      address: {
        provincia: provincia,
        ciudad: ciudad,
        calle: calle,
        codigoPostal: codigoPostal,
      },
    });

    const role = await Role.findOne({ name: "library" });
    newBaseUser.roles = [role?._id];

    if (req.file) {
      const file = req.file;
      const upload = uploadImage(file).then((res) => res);
      newLibrary.image = (await upload).Location;
    }

    await newBaseUser.save();
    await newLibrary.save();
    const token = generateToken(res, newBaseUser._id);
    return res.json({ newBaseUser, token });
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
};
