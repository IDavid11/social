import React, { useState, useEffect } from "react";
import BookItem from "components/Books/components/BookItem";
import { IBook } from "interfaces/IBook";
import API from "services/api";

const PopularBooks = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  //const getBooks = async () => {
  //  const res = await API.getBooks();
  //  setBooks(res.data);
  //  console.log(res.data);
  //};

  const getPopularBooks = async () => {
    const res = await API.getBooks();
    const popularBooks = res.data.slice(0, 5).map((popularBook) => {
      // calcular puntuación de un libro
      // de momento mostramos os 5 primeiros libros
      return {
        ...popularBook,
      };
    });
    setBooks(popularBooks);
  };

  useEffect(() => {
    //getBooks();
    getPopularBooks();
  }, []);

  return (
    <div className="container-fw">
      <div className="container container-mt50 container-recommended-books">
        <div className="title-n2 fw-600">Libros destacados</div>
        <div className="books-container">
          {books.map((book) => {
            return <BookItem key={book._id} book={book} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularBooks;
