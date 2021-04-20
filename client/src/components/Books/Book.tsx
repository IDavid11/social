import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBook } from "interfaces/IBook";
import { ILibrary } from "interfaces/ILibrary";
import API from "services/api";
import * as states from "utils/states";
// COMPONENTS
import RelatedBooks from "./components/RelatedBooks";
import AboutTheAuthor from "./components/AboutTheAuthor";
import DataSheet from "./components/DataSheet";
import Opinions from "./components/Opinions";
import Footer from "components/Global/Footer/Footer";
import BookComponent from "./components/BookComponent";

interface Params {
  id: string;
}

const Book = () => {
  const params: Params = useParams();

  const [book, setBook] = useState<IBook>(states.BookInitialState);
  const [bookPrice, setBookPrice] = useState(""); // Cambiar esto
  const [library, setLibrary] = useState<ILibrary>(states.LibraryInitialState);

  const getBook = async (id: string) => {
    const res = await API.getBook(id);
    const { title, author, summary, isbn, coverPage, libraries } = res.data;
    setBook({ title, author, summary, isbn, coverPage, libraries });
    console.log(res.data);
    setBookPrice(res.data.libraries[0].price[0]); // modificar
    getLibrary(res.data.libraries[0].library); // modificar
  };

  const getLibrary = async (id: string) => {
    const res = await API.getLibrary(id);
    const { libraryName, address, checks } = res.data;
    setLibrary({ libraryName, address, checks });
    console.log(res.data);
  };

  useEffect(() => {
    getBook(params.id);
  }, []);

  return (
    <>
      <BookComponent book={book} bookPrice={bookPrice} library={library} />
      <RelatedBooks />
      <AboutTheAuthor book={book} />
      <DataSheet />
      <Opinions />
      <Footer />
    </>
  );
};

export default Book;
