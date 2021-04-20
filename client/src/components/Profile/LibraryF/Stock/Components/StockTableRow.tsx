import React, { useState } from "react";
import EditBookForm from "./EditBookForm";
import { ILibrary } from "interfaces/ILibrary";
import { ILibraryBook } from "interfaces/ILibraryBook";

const editLogo = require("@logos/pencil.svg");
const deleteLogo = require("@logos/delete.svg");

interface Props {
  library: ILibrary;
  libraryBook: ILibraryBook;
}

const StockTableRow = ({ library, libraryBook }: Props) => {
  const [editClicked, setEditClicked] = useState(false);

  const handleEditClick = () => {
    setEditClicked(true);
  };

  return (
    <>
      <div className="row">
        <div className="column coverpage-column">
          <img src={libraryBook.book.coverPage} alt="" />
        </div>
        <div className="column title-column">{libraryBook.book.title}</div>
        <div className="column author-column">{libraryBook.book.author}</div>
        <div className="column isbn-column">{libraryBook.book.isbn}</div>
        <div className="column book-stock book-stock-column">
          <div className="cell">
            <div>Ebook</div>
            <div>{libraryBook.stock.ebook.stock}</div>
          </div>
          <div className="cell">
            <div>Tapa blanda</div>
            <div>{libraryBook.stock.tapaBlanda.stock}</div>
          </div>
          <div className="cell">
            <div>Tapa dura</div>
            <div>{libraryBook.stock.tapaDura.stock}</div>
          </div>
        </div>
        <div className="column book-price book-price-column">
          <div className="cell">
            <div>Ebook</div>
            <div>{libraryBook.price.ebook.price} €</div>
          </div>
          <div className="cell">
            <div>Tapa blanda</div>
            <div>{libraryBook.price.tapaBlanda.price} €</div>
          </div>
          <div className="cell">
            <div>Tapa dura</div>
            <div>{libraryBook.price.tapaDura.price} €</div>
          </div>
        </div>
        <div className="column book-options book-options-column">
          <button className="edit-option">
            <img onClick={handleEditClick} src={editLogo} alt="" />
          </button>
          <button className="delete-option">
            <img src={deleteLogo} alt="" />
          </button>
        </div>
      </div>
      {editClicked === true ? <EditBookForm existedBook={libraryBook} /> : <></>}
    </>
  );
};

export default StockTableRow;
