import React from "react";
import { IBook } from "interfaces/IBook";
import BookFormat from "./BookFormat";

interface Props {
  book: IBook;
}

const BookComponent = ({ book }: Props) => {
  return (
    <div className="container container-mt100">
      <div className="book-container">
        <div className="book">
          <div className="book-left">
            <img className="book-img" src={book.coverPage} alt={book.title} />
            <div className="author-follow">
              <img className="author-img" src={book.coverPage} alt="" />
              <div className="author-actions">
                <p>{book.author}</p>
                <p>Ratio</p>
                <button>Seguir</button>
              </div>
            </div>
          </div>
          <div className="book-details">
            <div className="details-header">
              <p className="book-title">{book.title}</p>
              <span>Wish List</span>
            </div>
            <p className="book-author">{book.author}</p>
            {book.ratio ? <p>{book.ratio}</p> : <p>Todavía no hay evaluaciones</p>}
            <p>Rewards</p>
            <BookFormat book={book} />
            <div className="summary">
              <p className="summary-title">Resumen</p>
              <p className="book-summary">{book.summary}</p>
              <p>Leer más</p>
            </div>
          </div>
          <div className="book-actions">
            <p className="book-price"> €</p>
            <p>Precio anterior: €</p>
            <p>Ahorras: 1,10 € (5%)</p>
            <div className="book-library">
              <p className="book-library-label">Vendido por:</p>
              <div className="book-library-container">
                <div className="book-library-flex">
                  <div className="book-library-img">
                    <img src={book.coverPage} alt="" />
                  </div>
                  <div className="book-library-details">
                    <p className="book-library-name">libraryName</p>
                    <div className="library-details-address">
                      <span></span>
                      {/*library.address ? (
                        <div>
                          <p className="first-address">
                            {library.address.ciudad}, {library.address.provincia}
                          </p>
                        </div>
                      ) : (
                        <p>Undefined</p>
                      )*/}
                      <span></span>
                    </div>
                    <p>Ratio</p>
                  </div>
                </div>
                <div className="book-library-checks">
                  <div className="check"></div>
                  <div className="check"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookComponent;
