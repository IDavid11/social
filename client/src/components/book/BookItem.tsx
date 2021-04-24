import React from "react";
import { IBook } from "interfaces/IBook";
import Link from "next/link";

interface Props {
  book: IBook;
}

const BookItem = ({ book }: Props) => {
  return (
    <>
      <div className="book-item-container">
        <Link href={`/books/[id]`} as={`/books/${book._id}`}>
          <a className="book-ancore">
            <div className="book-item">
              <div className="book-img">
                <img src={book.coverPage} alt="" />
              </div>
              <div className="book-details">
                <div className="details">
                  <div className="book-title">{book.title}</div>
                  <div className="book-author">{book.author}</div>
                  <div className="book-ratio">
                    <div></div>
                    <div>4.5</div>
                  </div>
                </div>
                <div className="prices">
                  <div className="book-price">
                    <div className="old-price"></div>
                    <div className="price"> €</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
      <div>Hola</div>
    </>
  );
};

export default BookItem;
