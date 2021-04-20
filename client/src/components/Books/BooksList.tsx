import React, { useState, useEffect } from "react";
import { instance } from "services/axios";
import { urls } from "services/urls";
import { IBook } from "../../interfaces/IBook";
import BookItem from "./components/BookItem";

const BooksList = () => {
  const [books, setBooks]: [IBook[], (books: IBook[]) => void] = useState([]);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    instance
      .get<IBook[]>(urls.urlBooks)
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        const error = err.response.status === 404 ? "Resource not found" : "An unexpected error has ocurred";
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container-fw">
      <div className="container container-mt100 container-flex books-container">
        {books &&
          books.map((book) => {
            return <BookItem book={book} key={book._id} />;
          })}
      </div>
    </div>
  );
};

export default BooksList;
