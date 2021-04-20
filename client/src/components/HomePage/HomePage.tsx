import React from "react";
import Hero from "./components/Hero";
import PopularBooks from "../Books/components/PopularBooks";
import Potential from "./components/Potential";
import RecommendedBooks from "../Books/components/RecommendedBooks";
import NewLibraries from "./components/NewLibraries";
import LocalLibraryDestacable from "./components/LocalLibraryDestacable";
import Footer from "components/Global/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <PopularBooks />
      <Potential />
      <RecommendedBooks />
      <NewLibraries />
      <LocalLibraryDestacable />
      <Footer />
    </div>
  );
};

export default HomePage;
