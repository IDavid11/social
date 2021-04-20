import { Request, Response } from "express";
import { generateToken } from "../libs/jwt";
import { uploadImage } from "../libs/upload";
import Franchise, { IFranchise } from "../models/Franchise";
import Library, { ILibrary } from "../models/Library";
import Role from "../models/Role";

export const addLibrary = async (req: Request, res: Response) => {
  //const { libraryName, cif, email, password, provincia, ciudad, calle, codigo_postal } = req.body;
  const franchise = await Franchise.findById(req.userId);
  if (!franchise) return res.status(400).json("Login is required");
  const { libraryName, provincia, ciudad, calle, codigo_postal } = req.body;

  //const saltRounds = 10;
  //const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    const newLibrary: ILibrary = new Library({
      libraryName: libraryName,
      //email: email,
      //password: hashedPassword,
      address: {
        provincia: provincia,
        ciudad: ciudad,
        calle: calle,
        codigo_postal: codigo_postal,
      },
    });

    const role = await Role.findOne({ name: "library" });
    newLibrary.roles = [role?._id];

    if (req.file) {
      const file = req.file;
      const upload = uploadImage(file).then((res) => res);
      newLibrary.image = (await upload).Location;
    }

    await newLibrary.save();

    await franchise.save();
    console.log("Debugging");
    const token = generateToken(res, newLibrary._id);
    return res.json({ newLibrary, token });
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
};
