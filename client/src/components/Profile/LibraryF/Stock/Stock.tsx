import React, { useState, useEffect } from "react";
import BookForm from "components/Profile/LibraryF/Stock/Components/BookForm";
import StockTable from "./Components/StockTable";
import { IBook } from "interfaces/IBook";
import API from "services/api";
import Footer from "components/Global/Footer/Footer";
import { ILibrary } from "interfaces/ILibrary";
import { ILibraryBook } from "interfaces/ILibraryBook";

const Stock = (props) => {
  const [libraryBooks, setLibraryBooks] = useState<ILibraryBook[]>([]);
  const [viewBookForm, setViewBookForm] = useState(true);

  const library = props.location.state.user;
  console.log(library.books);

  //const getLibraryBooks = async () => {
  //  const res = await API.getLibrary(library._id);
  //  console.log(res.data.books);
  //  setBooks(res.data.books);
  //};

  useEffect(() => {
    setLibraryBooks(library.books);
    //getLibraryBooks();
  }, []);

  return (
    <div className="container-fw">
      <div className="container container-mt50 container-stock">
        <div className="title-n3">Control de stock</div>
        <div className="container-flex-ac">
          <div className="container-search">
            <button>
              <div className="button-container">
                <span></span>
                <span>Busca por Libro, Autor o ISBN</span>
              </div>
            </button>
          </div>
          <div className="container-button-add">
            <button onClick={(evt) => setViewBookForm(true)}>
              <div className="button-container">
                <span></span>
                <span>Añadir</span>
              </div>
            </button>
          </div>
        </div>
        <div className="book-form-container">
          {/*viewBookForm === true ? <BookForm getLibraryBooks={getLibraryBooks} /> : <></>*/}
          {viewBookForm === true ? <BookForm /> : <></>}
        </div>
      </div>
      <div className="table-stock-container">
        {<StockTable library={library} libraryBooks={libraryBooks} />}
      </div>
    </div>
  );
};

export default Stock;
