import React from "react";

const progressBarLogo = require("@logos/ProgressBar.svg");

const FavCategory = () => {
  return (
    <div className="fav-category-container">
      <div className="fav-category-wrap">
        <div className="fav-category">
          <div className="img">{/*<img src="" alt="" />*/}</div>
          <div className="progress">
            <div>Policiacas - 54%</div>
            <img src={progressBarLogo} alt="" />
          </div>
          <div className="average">34 / 115</div>
        </div>
      </div>
    </div>
  );
};

export default FavCategory;
