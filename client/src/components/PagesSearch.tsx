import FilterLogo from "icons/FilterLogo";
import LeftArrowLogo from "icons/LeftArrowLogo";
import React from "react";

const PagesSearch = () => {
  return (
    <div className="pages-search-container">
      <button className="pages-search-button">
        <div className="back-svg">
          <LeftArrowLogo height={14} />
        </div>
        <div className="button-text">¿Qúe buscas?</div>
        <div className="filter-svg">
          <FilterLogo height={14} />
        </div>
      </button>
    </div>
  );
};

export default PagesSearch;
