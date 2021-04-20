import React from "react";
import { webUrls } from "services/webUrls";
import { Link } from "react-router-dom";
import { IBook } from "interfaces/IBook";

interface Props {
  book: IBook;
}

const BookItem = ({ book }: Props) => {
  return (
    <>
      <div className="item-book-container">
        <Link className="card-book" to={`${webUrls.urlBooks}/${book._id}`}>
          <div className="item-book">
            <div className="card-book-img">
              <img src={book.coverPage} alt="" />
            </div>
            <div className="card-book-details">
              <div className="first-details">
                <div className="book-title">{book.title}</div>
                <div className="book-author">{book.author}</div>
                <div className="book-ratio">
                  <div></div>
                  <div>4.5</div>
                </div>
              </div>
              <div className="second-details">
                <div className="book-price">
                  <div className="old-price"></div>
                  <div className="price"> €</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BookItem;
