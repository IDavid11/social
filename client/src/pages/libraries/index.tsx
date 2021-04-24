import React from "react";
import { instance } from "services/axios";
import { apiUrls } from "services/apiUrls";
import { Layout } from "modules/layouts/Layout";
import { ILibrary } from "interfaces/ILibrary";
import { InferGetServerSidePropsType } from "next";
import PagesSearch from "components/PagesSearch";

const index = ({ libraries }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <PagesSearch />
      <div className="libraries-container">
        {libraries.map((library) => {
          return (
            <div>
              <div>{library.libraryName}</div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await instance.get(apiUrls.urlLibraries);
  const libraries: ILibrary[] = res.data;
  console.log(libraries);

  return { props: { libraries } };
};

export default index;
