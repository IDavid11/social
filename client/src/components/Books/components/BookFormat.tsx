import React from "react";

const BookFormat = (book) => {
  return (
    <div className="book-type-container">
      <div className="book-type">
        <p>Tapa dura</p>
        <p className="type-price">27.99€</p>
      </div>
      <div className="book-type">
        <p>Tapa blanda</p>
        <p className="type-price">21.99€</p>
      </div>
    </div>
  );
};

export default BookFormat;
