import SearchLogo from "icons/SearchLogo";
import React from "react";

const MobileSearch = () => {
  return (
    <div className="search-container">
      <button className="search-button">
        <div className="button-svg">
          <SearchLogo height={14} width={14} />
        </div>
        <div className="button-text">¿Qúe buscas?</div>
      </button>
    </div>
  );
};

export default MobileSearch;
