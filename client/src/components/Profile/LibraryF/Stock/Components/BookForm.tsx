import React, { useState, useEffect, ChangeEvent } from "react";
import API from "services/api";
import { IBook } from "interfaces/IBook";
import * as states from "utils/states";
import FloatContainer from "components/Auth/Components/FloatContainer";
import StockForm from "./StockForm";
import PriceForm from "./PriceForm";
import { ILibraryBook } from "interfaces/ILibraryBook";

const imageInputLogo = require("@logos/image_input.svg");

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
  id: string;
}

interface Props {
  existedBook?: IBook;
  getLibraryBooks?: () => Promise<void>;
}

const BookForm = ({ getLibraryBooks, existedBook }: Props) => {
  const [libraryBook, setLibraryBook] = useState<ILibraryBook>(states.LibraryBookInitialState);
  const [stock, setStock] = useState(states.StockInitialState);
  const [image, setImage] = useState();
  const [focus, setFocus] = useState(states.FocusInitialState);

  const [ebookPrice, setEbookPrice] = useState({
    offer: false,
    price: "",
    newPrice: "",
  });
  const [tapaBlandaPrice, setTapaBlandaPrice] = useState({
    offer: false,
    price: "",
    newPrice: "",
  });
  const [tapaDuraPrice, setTapaDuraPrice] = useState({
    offer: false,
    price: "",
    newPrice: "",
  });

  const [stockCheck, setStockCheck] = useState(states.CheckInitialState);
  const [formatBookFocus, setFormatBookFocus] = useState(states.CheckInitialState);

  const onChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleBasicEbookInputChange = (e: InputChange) => {
    if (e.target.value !== "") {
      setEbookPrice({ ...ebookPrice, [e.target.name]: e.target.value });
      setLibraryBook({ ...libraryBook, [libraryBook.price.ebook[e.target.name]]: e.target.value });
    } else {
      setEbookPrice({ ...ebookPrice, [e.target.name]: "" });
      setLibraryBook({ ...libraryBook, [libraryBook.price.ebook[e.target.name]]: "" });
    }
  };

  const handleEbookInputChange = (e: InputChange) => {
    if (e.target.value !== "") setEbookPrice({ ...ebookPrice, [e.target.name]: e.target.value });
    if (e.target.value === "") setEbookPrice({ ...ebookPrice, [e.target.name]: "" });
  };

  const handleTapaBlandaInputChange = (e: InputChange) => {
    if (e.target.value !== "") setTapaBlandaPrice({ ...tapaBlandaPrice, [e.target.name]: e.target.value });
    if (e.target.value === "") setTapaBlandaPrice({ ...tapaBlandaPrice, [e.target.name]: "" });
  };

  const handleTapaDuraInputChange = (e: InputChange) => {
    if (e.target.value !== "") setTapaDuraPrice({ ...tapaDuraPrice, [e.target.name]: e.target.value });
    if (e.target.value === "") setTapaDuraPrice({ ...tapaDuraPrice, [e.target.name]: "" });
  };

  const handleInputChange = (e: InputChange) => {
    if (e.target.value !== "") {
      setFocus({ ...focus, [e.target.name]: true });
      setLibraryBook({ ...libraryBook, [e.target.name]: e.target.value });
      setStock({ ...stock, [e.target.name]: e.target.value });

      setTapaBlandaPrice({ ...tapaBlandaPrice, [e.target.name]: e.target.value });
      setTapaDuraPrice({ ...tapaDuraPrice, [e.target.name]: e.target.value });
    } else {
      setLibraryBook({ ...libraryBook, [e.target.name]: "" });
      setStock({ ...stock, [e.target.name]: "" });

      setTapaBlandaPrice({ ...tapaBlandaPrice, [e.target.name]: "" });
      setTapaDuraPrice({ ...tapaDuraPrice, [e.target.name]: "" });
      setFocus({ ...focus, [e.target.name]: false });
    }
  };

  const handleClickCheck = (e) => {
    setStockCheck({ ...stockCheck, [e.target.name]: !stockCheck[e.target.name] });
  };

  const addBook = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", libraryBook.book.title);
    formData.append("author", libraryBook.book.author);
    formData.append("isbn", libraryBook.book.isbn);

    formData.append("ebookStock", stock.ebook);
    formData.append("tapaBlandaStock", stock.tapaBlanda);
    formData.append("tapaDuraStock", stock.tapaDura);

    formData.append("ebookPrice", ebookPrice.price);
    formData.append("ebookNewPrice", ebookPrice.newPrice);
    formData.append("tapaBlandaPrice", tapaBlandaPrice.price);
    formData.append("tapaBlandaNewPrice", tapaBlandaPrice.newPrice);
    formData.append("tapaDuraPrice", tapaDuraPrice.price);
    formData.append("tapaDuraNewPrice", tapaDuraPrice.newPrice);
    await API.addBook(formData);
    setLibraryBook(states.LibraryBookInitialState);
    setStock(states.StockInitialState);
    setEbookPrice(states.FormatPriceInitialState);
    setTapaBlandaPrice(states.FormatPriceInitialState);
    setTapaDuraPrice(states.FormatPriceInitialState);
    getLibraryBooks();
  };

  return (
    <div className="form-container">
      <div className="form-wrap">
        <div className="form">
          <div className="book-form">
            <div className="field-image-wrap">
              <img className="image" src={imageInputLogo} alt="" />
              <input className="hidden-input" type="file" onChange={onChange} />
            </div>
            <div className="field-wrap">
              <FloatContainer
                label={"Título"}
                inputType={"text"}
                inputName={"title"}
                value={libraryBook.book.title}
                focusValue={focus.title}
                handleInputChange={handleInputChange}
              />
              <FloatContainer
                label={"Autor"}
                inputType={"text"}
                inputName={"author"}
                value={libraryBook.book.author}
                focusValue={focus.author}
                handleInputChange={handleInputChange}
              />
              <FloatContainer
                label={"ISBN"}
                inputType={"text"}
                inputName={"isbn"}
                value={libraryBook.book.isbn}
                focusValue={focus.isbn}
                handleInputChange={handleInputChange}
              />
            </div>
            <div className="format-buttons-wrap">
              <div className="format-button">
                <button
                  onClick={(evt) => setFormatBookFocus({ ebook: true, tapaBlanda: false, tapaDura: false })}
                >
                  Ebook
                </button>
              </div>
              <div className="format-button">
                <button
                  onClick={(evt) => setFormatBookFocus({ ebook: false, tapaBlanda: true, tapaDura: false })}
                >
                  Tapa blanda
                </button>
              </div>
              <div className="format-button">
                <button
                  onClick={(evt) => setFormatBookFocus({ ebook: false, tapaBlanda: false, tapaDura: true })}
                >
                  Tapa dura
                </button>
              </div>
            </div>
            <>
              {formatBookFocus.ebook === true ? (
                <>
                  <div className="inputs-container">
                    <div className="stock-container">
                      <StockForm
                        stockCheckProperty={stockCheck.ebook}
                        stockCheck={stockCheck}
                        setStockCheck={setStockCheck}
                        checkName={"ebook"}
                        inputName={"ebook"}
                        value={stock.ebook}
                        handleInputChange={handleInputChange}
                        handleClickCheck={handleClickCheck}
                      />
                    </div>
                    {stockCheck.ebook === true ? (
                      <div className="price-container">
                        <PriceForm
                          checkName={"ebookOffert"}
                          actualPriceValue={ebookPrice.price}
                          actualPriceName={"price"}
                          newPriceValue={ebookPrice.newPrice}
                          newPriceName={"newPrice"}
                          handleInputChange={handleEbookInputChange}
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ) : (
                <></>
              )}
              {formatBookFocus.tapaBlanda === true ? (
                <>
                  <div className="inputs-container">
                    <div className="stock-container">
                      <StockForm
                        stockCheckProperty={stockCheck.tapaBlanda}
                        stockCheck={stockCheck}
                        setStockCheck={setStockCheck}
                        checkName={"tapaBlanda"}
                        inputName={"tapaBlanda"}
                        value={stock.tapaBlanda}
                        handleInputChange={handleInputChange}
                        handleClickCheck={handleClickCheck}
                      />
                    </div>
                    {stockCheck.tapaBlanda === true ? (
                      <div className="price-container">
                        <PriceForm
                          checkName={"tapaBlandaOffert"}
                          actualPriceValue={tapaBlandaPrice.price}
                          actualPriceName={"price"}
                          newPriceValue={tapaBlandaPrice.newPrice}
                          newPriceName={"newPrice"}
                          handleInputChange={handleTapaBlandaInputChange}
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ) : (
                <></>
              )}
              {formatBookFocus.tapaDura === true ? (
                <>
                  <div className="inputs-container">
                    <div className="stock-container">
                      <StockForm
                        stockCheckProperty={stockCheck.tapaDura}
                        stockCheck={stockCheck}
                        setStockCheck={setStockCheck}
                        checkName={"tapaDura"}
                        inputName={"tapaDura"}
                        value={stock.tapaDura}
                        handleInputChange={handleInputChange}
                        handleClickCheck={handleClickCheck}
                      />
                    </div>
                    {stockCheck.tapaDura === true ? (
                      <div className="price-container">
                        <PriceForm
                          checkName={"tapaDuraOffert"}
                          actualPriceValue={tapaDuraPrice.price}
                          actualPriceName={"price"}
                          newPriceValue={tapaDuraPrice.newPrice}
                          newPriceName={"newPrice"}
                          handleInputChange={handleTapaDuraInputChange}
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          </div>
        </div>
        <div className="form-button">
          <button onClick={addBook}>Añadir</button>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
