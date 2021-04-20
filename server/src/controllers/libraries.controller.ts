import { Request, Response } from "express";
import Library from "../models/Library";

class LibrariesController {
  public async getLibrary(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const library = await Library.findById(id).populate({
        path: "books",
        populate: { path: "book", model: "Book", select: "coverPage title author isbn" },
      });
      return res.json(library);
    } catch (error) {
      return res.json("That library is not in our database");
    }
  }

  public async getLibraries(req: Request, res: Response) {
    const libraries = await Library.find();
    res.json(libraries);
  }

  public async getLibrariesBooks(req: Request, res: Response) {
    const librariesBooks = await Library.find().populate({
      path: "books",
      select: "title isbn",
    });
    res.json(librariesBooks);
  }

  public async profile(req: Request, res: Response) {
    const library = await Library.findById(req.userId, { password: 0 }).populate({
      path: "books",
      populate: {
        path: "book",
        model: "Book",
        select: "coverPage title author isbn",
      },
    });
    if (!library) {
      return res.status(404).json("No User found");
    }
    res.json(library);
  }
}

export const librariesController = new LibrariesController();
