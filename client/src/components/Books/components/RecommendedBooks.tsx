import React, { useState, useEffect } from "react";
import BookItem from "components/Books/components/BookItem";
import { IBook } from "interfaces/IBook";
import API from "services/api";

const RecommendedBooks = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const getRecommendedBooks = async () => {
    const res = await API.getBooks();
    const recommendedBooks = res.data.slice(0, 5).map((recommendedBook) => {
      // calcular afinidade de un libro co usuario
      // de momento mostramos os 5 primeiros libros
      return {
        ...recommendedBook,
      };
    });
    setBooks(recommendedBooks);
  };

  useEffect(() => {
    getRecommendedBooks();
  }, []);

  return (
    <div className="container-fw">
      <div className="container container-mt100 container-recommended-books">
        <div className="title-n2 fw-600">Libros recomendados para ti</div>
        <div className="books-container">
          {books.map((book) => {
            return <BookItem key={book._id} book={book} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RecommendedBooks;
