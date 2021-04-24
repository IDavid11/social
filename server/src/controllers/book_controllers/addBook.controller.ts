import { Request, response, Response } from "express";
import { uploadImage } from "../../libs/upload";
import Author, { IAuthor } from "../../models/Author";
import Book, { IBook } from "../../models/Book";
import Library, { ILibrary } from "../../models/Library";
import Report, { IReport } from "../../models/Report";
import User from "../../models/BaseUser";

type Stock = {
  ebook: {
    isOffered: Boolean;
    stock: Number;
    solds: Number;
  };
  tapaBlanda: {
    isOffered: Boolean;
    stock: Number;
    solds: Number;
  };
  tapaDura: {
    isOffered: Boolean;
    stock: Number;
    solds: Number;
  };
};

type ConstStock = {
  ebookStock: Number;
  tapaBlandaStock: Number;
  tapaDuraStock: Number;
};

type Price = {
  ebook: {
    offer: Number;
    price: Number;
    newPrice: Number;
  };
  tapaBlanda: {
    offer: Number;
    price: Number;
    newPrice: Number;
  };
  tapaDura: {
    offer: Number;
    price: Number;
    newPrice: Number;
  };
};

type ExistedBooksArguments = {
  library: ILibrary;
  req: Request;
};

type AddStock = {
  library: ILibrary;
  newBook: IBook;
  stock: ConstStock;
  price: Price;
};

type P = {
  newBook: IBook;
  req: Request;
};

const checkExistedsBooks = async ({ library, req }: ExistedBooksArguments) => {
  const existedBook = await Book.findOne({ isbn: req.body.isbn });

  if (existedBook) {
    existedBook.libraries.push(library._id);

    await library.save();
    existedBook.save();

    return existedBook;
  }
};

const addStock = async ({ library, newBook, stock, price }: AddStock) => {
  library.books.push({
    book: newBook._id,
    stock: {
      ebook: {
        isOffered: true,
        stock: stock.ebookStock,
        solds: 0,
      },
      tapaBlanda: {
        isOffered: true,
        stock: stock.tapaBlandaStock,
        solds: 0,
      },
      tapaDura: {
        isOffered: true,
        stock: stock.tapaDuraStock,
        solds: 0,
      },
    },
    price: {
      ebook: {
        offer: false,
        price: price.ebook.price,
        newPrice: price.ebook.newPrice,
      },
      tapaBlanda: {
        offer: false,
        price: price.tapaBlanda.price,
        newPrice: price.tapaBlanda.newPrice,
      },
      tapaDura: {
        offer: false,
        price: price.tapaDura.price,
        newPrice: price.tapaDura.newPrice,
      },
    },
  });
};

const checkImage = async ({ req, newBook }: P): Promise<string> => {
  if (req.file) {
    const file = req.file;
    const upload = uploadImage(file).then((res) => res);
    return (newBook.coverPage = (await upload).Location);
  } else {
    return (newBook.coverPage = "Default.jpg");
  }
};

type NewAuthorArguments = {
  author: string;
  authorId: string;
  newBookId: IBook;
};

const addNewAuthor = async ({ author, authorId, newBookId }: NewAuthorArguments) => {
  const existedAuthor = await Author.findById(authorId);
  if (existedAuthor) return existedAuthor.books.push(newBookId);

  const newAuthor: IAuthor = new Author({
    name: author,
    books: newBookId,
  });
  newAuthor.save();
};

export const addBook = async (req: Request, res: Response) => {
  try {
    const {
      title,
      author,
      authorId,
      isbn,
      tapaDuraStock,
      tapaBlandaStock,
      ebookStock,
      ebookOffer,
      ebookPrice,
      ebookNewPrice,
      tapaBlandaOffer,
      tapaBlandaPrice,
      tapaBlandaNewPrice,
      tapaDuraOffer,
      tapaDuraPrice,
      tapaDuraNewPrice,
    } = req.body;

    console.log(req.file);

    const user = await User.findById(req.userId);
    if (!user) return res.status(403).json("Forbiden access");
    const library = await Library.findOne({ baseUserId: req.userId });
    if (!library) return res.status(400).json("Login is required");

    const stock = {
      ebookStock: ebookStock,
      tapaBlandaStock: tapaBlandaStock,
      tapaDuraStock: tapaDuraStock,
    };

    const price = {
      ebook: {
        offer: ebookOffer,
        price: ebookPrice,
        newPrice: ebookNewPrice,
      },
      tapaBlanda: {
        offer: tapaBlandaOffer,
        price: tapaBlandaPrice,
        newPrice: tapaBlandaNewPrice,
      },
      tapaDura: {
        offer: tapaDuraOffer,
        price: tapaDuraPrice,
        newPrice: tapaDuraNewPrice,
      },
    };

    const newBook: IBook = new Book({
      title: title,
      author: author,
      isbn: isbn,
      isPublished: false,
    });

    await addStock({ library, newBook, stock, price });
    await library.save();

    const response = await checkExistedsBooks({ library, req });
    if (response !== undefined) return res.status(200).json(response); // SE O LIBRO EXISTE INTERRUMPE A FUNCION E RETORNA O LIBRO

    await checkImage({ req, newBook }).then((res) => (newBook.coverPage = res));
    console.log(newBook.coverPage);
    const newBookId = newBook._id;
    await addNewAuthor({ author, authorId, newBookId });

    newBook.libraries.push(library._id);
    await newBook.save();

    const newReport: IReport = new Report({
      incident: {
        book: {
          bookId: newBookId,
        },
      },
    });

    await newReport.save();

    return res.json({
      message: "Book saved",
      newBook,
    });
  } catch (err) {
    console.log(err);
  }
};
