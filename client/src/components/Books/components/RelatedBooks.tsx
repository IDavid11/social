import React, { useState, useEffect } from "react";
import BookItem from "components/Books/components/BookItem";
import { IBook } from "interfaces/IBook";
import API from "services/api";

const RelatedBooks = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const getBooks = async () => {
    const res = await API.getBooks();
    setBooks(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="container container-recommended-books">
      <div className="title">
        <h2>Libros relacionados</h2>
      </div>
      <div className="books-container">
        {books.map((book) => {
          return <BookItem key={book._id} book={book} />;
        })}
      </div>
    </div>
  );
};

export default RelatedBooks;
