import { Request, Response } from "express";
import Library from "../models/Library";
import BaseUser from "../models/BaseUser";
import User, { IUser } from "../models/User";
import Role from "../models/Role";
import { uploadImage } from "../libs/upload";

class UsersController {
  public async getUsers(req: Request, res: Response) {
    const users = await BaseUser.find();
    res.json(users);
  }

  public async profile(req: Request, res: Response) {
    const baseUser = await BaseUser.findById(req.userId, { password: 0 });
    if (!baseUser) return res.status(401).json("Login is required");
    const roles = await Role.find({ _id: { $in: baseUser?.roles } });

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "user") {
        const user = await User.findOne({ baseUserId: req.userId });
        if (user) return res.status(200).json({ baseUser, user });
      }
      if (roles[i].name === "library") {
        const library = await Library.findById(req.userId, { password: 0 }).populate({
          path: "books",
          populate: {
            path: "book",
            model: "Book",
            select: "coverPage title author isbn",
          },
        });
        if (library) return res.status(200).json({ baseUser, library });
      }
    }
    return res.status(404).json("User Not Found");
  }

  public async updateUser(req: Request, res: Response): Promise<Response> {
    const id = req.userId;
    const {
      email,
      name,
      lastName,
      address: { provincia, ciudad, codigoPostal, pais },
    } = req.body;
    console.log(req.body);
    const updatedBaseUser = await BaseUser.findByIdAndUpdate(id, email, { new: true });
    const updatedUser = await User.findOneAndUpdate(
      { baseUserId: id },
      {
        name,
        lastName,
        address: { provincia: provincia, ciudad: ciudad, codigoPostal: codigoPostal, pais: pais },
      },
      { new: true }
    );
    console.log(updatedUser);

    return res.json({
      message: "Successfully updated",
      updatedBaseUser,
      updatedUser,
    });
  }

  public async updateUserImage(req: Request, res: Response): Promise<Response> {
    const id = req.userId;
    const file = req.file;
    const upload = uploadImage(file).then((res) => res);

    const updatedUser = await User.findOneAndUpdate(
      { baseUserId: id },
      { image: (await upload).Location },
      { new: true }
    );

    return res.json({
      message: "Image successfully updated",
      updatedUser,
    });
  }

  public async addUserShippingAddress(req: Request, res: Response): Promise<Response> {
    const user = await User.findOne({ baseUserId: req.userId });
    if (!user) return res.status(403).json("Loging is required");
    user.shippingAddresses.push(req.body);
    user.save();

    return res.json({
      message: "Shipping Address successfully added",
      user,
    });
  }

  public async updateUserShippingAddress(req: Request, res: Response): Promise<Response> {
    const { name, addressType, address, provincia, ciudad, codigoPostal, pais } = req.body;

    const user = await User.findOneAndUpdate(
      {
        baseUserId: req.userId,
        "shippingAddresses._id": req.params.id,
      },
      {
        $set: {
          "shippingAddresses.$.name": name,
          "shippingAddresses.$.addressType": addressType,
          "shippingAddresses.$.address": address,
          "shippingAddresses.$.provincia": provincia,
          "shippingAddresses.$.ciudad": ciudad,
          "shippingAddresses.$.codigoPostal": codigoPostal,
          "shippingAddresses.$.pais": pais,
        },
      },
      { new: true }
    );

    return res.json({
      message: "Shipping Address successfully updated",
      user,
    });
  }

  public async getUserShippingAddress(req: Request, res: Response): Promise<Response> {
    const user = await User.findOne({ baseUserId: req.userId });
    if (!user) return res.status(403).json("Login is required");
    for (var i = 0; i < user.shippingAddresses.length; i++) {
      console.log(user.shippingAddresses[i]._id);
      if (user.shippingAddresses[i]._id == req.params.id)
        return res.status(200).json(user.shippingAddresses[i]);
    }
    return res.status(404).json("Shipping Address Not Found");
  }
}

export const usersController = new UsersController();
