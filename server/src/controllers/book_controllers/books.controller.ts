import { Request, Response } from "express";
import Book, { IBook } from "../../models/Book";
import Library from "../../models/Library";
import User from "../../models/BaseUser";
import Client from "../../models/User";
import { uploadImage } from "../../libs/upload";

class BooksController {
  public async getBooks(req: Request, res: Response): Promise<Response> {
    //const books: IBook[] = await Book.find({ $or: [{ isPublished: true }] });
    const books: IBook[] = await Book.find({ isPublished: true });
    //const books: IBook[] = await Book.find();
    return res.json(books);
  }

  public async getBook(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id;
      const book = await Book.findById(id);
      return res.json(book);
    } catch (error) {
      return res.json("That book is not in our database");
    }
  }

  public async wantList(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id;
      const book = await Book.findById(id);
      const client = await Client.findById(req.userId);

      if (!book || !client) return res.status(400).json("Oops");

      const index = client.wanted.indexOf(book._id);
      if (index > -1) {
        client.wanted.splice(index, 1);
      } else {
        client.wanted.push(book._id);
      }
      await client.save();
      return res.json(client.wanted);
    } catch (error) {
      return res.json("That book is not in our database");
    }
  }

  public async cartList(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id;
      const book = await Book.findById(id);
      const client = await Client.findById(req.userId);

      if (!book || !client) return res.status(400).json("Oops");

      client.cart.push(book._id);

      await client.save();
      return res.json(client.cart);
    } catch (error) {
      return res.json("That book is not in our database");
    }
  }

  public async boughtList(req: Request, res: Response): Promise<Response> {
    try {
      const id = req.params.id;
      const book = await Book.findById(id);
      const client = await Client.findById(req.userId);

      if (!book || !client) return res.status(400).json("Oops");

      client.bought.push(book._id);
      await client.save();
      return res.json(client.bought);
    } catch (error) {
      return res.json("That book is not in our database");
    }
  }

  public async addBook(req: Request, res: Response): Promise<Response> {
    const { title, author, isbn, price, summary } = req.body;
    const library = await Library.findById(req.userId);
    if (!library) return res.status(400).json("Login is required");

    console.log(req.file);

    const newBook: IBook = new Book({
      title: title,
      author: author,
      isbn: isbn,
      price: price,
      libraries: library._id,
      summary: summary,
    });

    if (req.file) {
      const file = req.file;
      const upload = uploadImage(file).then((res) => res);
      newBook.coverPage = (await upload).Location;
    }

    const existedBook = await Book.findOne({ isbn: isbn });
    if (!existedBook) {
      library.books.push(newBook._id);
      await library.save();
      await newBook.save();
      console.log(newBook);
      return res.json({
        message: "Book saved",
        newBook,
      });
    }
    existedBook.libraries.push(library._id);
    library.books.push(newBook._id);
    await library.save();
    await existedBook.save();
    return res.json({
      message: "Book saved",
      newBook,
    });

    //library.books.push(newBook._id);
    //await library.save();
    //await newBook.save();
    //console.log(newBook);
    //return res.json({
    //  message: "Book saved",
    //  newBook,
    //});
  }

  public async updateBook(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const body = req.body;
    const updatedBook = await Book.findByIdAndUpdate(id, body, { new: true });
    return res.json({
      message: "Successfully updated",
      updatedBook,
    });
  }

  public async deleteBook(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const book = await Book.findByIdAndRemove(id);
    return res.json({
      message: "Book deleted",
      book,
    });
  }
}

export const booksController = new BooksController();
