import SearchLogo from "icons/SearchLogo";
import React from "react";

const SearchButton = () => {
  return (
    <button className="search-button">
      <div className="label">
        <label className="search-label" htmlFor="search">
          Título, ISBN, Autor, Código Postal, Ciudad...
        </label>
        <SearchLogo />
      </div>
      <input className="search-input" name="search" type="text" />
    </button>
  );
};

export default SearchButton;
