import { ILibrary } from "interfaces/ILibrary";
import React from "react";
import { apiUrls } from "services/apiUrls";
import { instance } from "services/axios";
import Home from "./home";

interface Props {
  libraries: ILibrary[];
}

const index = ({ libraries }: Props) => {
  return <Home libraries={libraries} />;
};

export async function getStaticProps(context: any) {
  console.log("Fetching data...");

  const res = await instance.get(`${apiUrls.urlLibraries}`);
  const libraries: ILibrary[] = res.data;

  return { props: { libraries }, revalidate: 10 };
}

export default index;
