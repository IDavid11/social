import React from "react";
import { InferGetServerSidePropsType } from "next";
import { instance } from "services/axios";
import { apiUrls } from "services/apiUrls";
import { IBook } from "interfaces/IBook";
import { Layout } from "modules/layouts/Layout";
import BookItem from "components/book/BookItem";

const index = ({ books }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <div>
        {books.map((book: IBook) => {
          return <BookItem key={book._id} book={book} />;
        })}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await instance.get(apiUrls.urlBooks);
  const books: IBook[] = res.data;

  return { props: { books } };
};

export default index;
