import React from "react";
import { ILibrary } from "interfaces/ILibrary";
import HomePage from "modules/home-page/HomePage";

interface Props {
  libraries: ILibrary[];
}

function Home({ libraries }: Props) {
  return <HomePage libraries={libraries} />;
}

export default Home;
