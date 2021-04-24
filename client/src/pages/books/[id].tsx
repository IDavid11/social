import React from "react";
import { useRouter } from "next/router";
import { IBook } from "interfaces/IBook";
import { apiUrls } from "services/apiUrls";
import { instance } from "services/axios";
import BookPage from "modules/books/BookPage";

const Book = ({ props }: any) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  console.log(props);

  return (
    <>
      <BookPage {...props} />
    </>
  );
};

export async function getStaticPaths() {
  const res = await instance.get(apiUrls.urlBooks);
  const books = res.data;

  const paths = books.map((book: IBook) => ({
    params: { id: book._id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  console.log("Fetching data...");
  const { params } = context;
  const { id } = params;

  const res = await instance.get(`${apiUrls.urlBooks}/${id}`);
  const data = res.data;

  const props = {
    ...data,
  };
  return { props: { props }, revalidate: 3 };
}

export default Book;
