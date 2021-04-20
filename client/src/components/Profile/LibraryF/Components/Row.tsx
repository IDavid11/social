import React from "react";
import { IBook } from "interfaces/IBook";

interface Props {
  book: IBook;
}

const Row = ({ book }: Props) => {
  console.log(book);
  return (
    <div className="table-stock-row container-flex-ac">
      <img src={book.coverPage} alt="" />
      <div className="stock-title table-col">{book.title}</div>
      <div className="stock-author table-col">{book.author}</div>
      <div className="stock-isbn table-col">{book.isbn}</div>
    </div>
  );
};

export default Row;
