import React, { useState, useEffect, ChangeEvent } from "react";
import { urls } from "services/urls";
import API from "services/api";
import { IBook } from "interfaces/IBook";
import FloatContainer from "components/Auth/Components/FloatContainer";
import * as states from "utils/states";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
  id: string;
}

const ModeratorBookForm = () => {
  const [book, setBook] = useState<IBook>(states.BookInitialState);
  const [focus, setFocus] = useState({
    title: false,
    author: false,
    isbn: false,
    price: false,
    summary: false,
  });

  const [image, setImage] = useState();
  //const [filename, setFilename] = useState("Choose File");

  const onChange = (e) => {
    setImage(e.target.files[0]);
    //setFilename(e.target.files[0].name);
  };

  const handleInputChange = (e: InputChange) => {
    if (e.target.value !== "") {
      setFocus({ ...focus, [e.target.name]: true });
      setBook({ ...book, [e.target.name]: e.target.value });
    } else {
      setBook({ ...book, [e.target.name]: "" });
      setFocus({ ...focus, [e.target.name]: false });
    }
  };

  const addBook = async () => {
    const formData = new FormData();
    formData.append("title", book.title);
    formData.append("author", book.author);
    formData.append("isbn", book.isbn);
    //formData.append("price", book.price);
    formData.append("summary", book.summary);
    formData.append("image", image);
    await API.addBook(formData);
  };

  return (
    <div className="container-fw">
      <div className="container container-mt100">
        <div className="field-wrap">
          <FloatContainer
            label={"Título"}
            inputType={"text"}
            inputName={"title"}
            value={book.title}
            focusValue={focus.title}
            handleInputChange={handleInputChange}
          />
          <FloatContainer
            label={"Autor"}
            inputType={"text"}
            inputName={"author"}
            value={book.author}
            focusValue={focus.author}
            handleInputChange={handleInputChange}
          />
          <FloatContainer
            label={"ISBN"}
            inputType={"number"}
            inputName={"isbn"}
            value={book.isbn}
            focusValue={focus.isbn}
            handleInputChange={handleInputChange}
          />
          <FloatContainer
            label={"Precio"}
            inputType={"number"}
            inputName={"price"}
            value={book.author}
            focusValue={focus.price}
            handleInputChange={handleInputChange}
          />
          <FloatContainer
            label={"Resumen"}
            inputType={"text"}
            inputName={"summary"}
            value={book.summary}
            focusValue={focus.summary}
            handleInputChange={handleInputChange}
          />
        </div>
        <button onClick={addBook}>Añadir</button>
      </div>
    </div>
  );
};

export default ModeratorBookForm;
