import MobileSearch from "components/MobileSearch";
import { ILibrary } from "interfaces/ILibrary";
import CloseLibraries from "modules/libraries/CloseLibraries";
import React from "react";
import { Layout } from "../layouts/Layout";
import BoostLibrary from "./BoostLibrary";
import CategoriesDive from "./CategoriesDive";
import ComeToLocal from "./ComeToLocal";
import Hero from "./Hero";

interface Props {
  libraries: ILibrary[];
}

const HomePage = ({ libraries }: Props) => {
  return (
    <Layout>
      <MobileSearch />
      <Hero />
      <CloseLibraries libraries={libraries} />
      <ComeToLocal />
      <BoostLibrary />
      <CategoriesDive />
    </Layout>
  );
};

export default HomePage;
