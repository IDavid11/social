import React from "react";

interface Props {
  title: string;
  author: string;
  isbn: string;
}

const BookPage = ({ title, author, isbn }: Props) => {
  return (
    <>
      <div>
        <p>{title}</p>
        <p>{author}</p>
      </div>
    </>
  );
};

export default BookPage;
