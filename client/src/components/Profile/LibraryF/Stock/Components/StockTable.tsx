import React, { useEffect } from "react";
import { IBook } from "interfaces/IBook";
import StockTableRow from "./StockTableRow";
import { ILibrary } from "interfaces/ILibrary";
import { ILibraryBook } from "interfaces/ILibraryBook";

interface Props {
  library: ILibrary;
  libraryBooks: ILibraryBook[];
}

const StockTable = ({ library, libraryBooks }: Props) => {
  return (
    <div className="stock-table-container">
      <div className="stock-table-wrap">
        <div className="table-header">
          <div className="column coverpage-column">Portada</div>
          <div className="column title-column">Título</div>
          <div className="column author-column">Autor</div>
          <div className="column isbn-column">ISBN</div>
          <div className="column book-stock-column">Stock</div>
          <div className="column book-price-column">Precio</div>
          <div className="column book-options-column">Opciones</div>
        </div>
        {libraryBooks.map((libraryBook) => {
          return <StockTableRow key={libraryBook._id} library={library} libraryBook={libraryBook} />;
        })}
      </div>
    </div>
  );
};

export default StockTable;
