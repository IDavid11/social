import CategoryDiveItem from "components/CategoryDiveItem";
import React from "react";

const CategoriesDive = () => {
  return (
    <div className="categories-dive-container">
      <div className="categories-dive-wrap">
        <div className="categories-dive-header">
          <h1 className="header-title">Sumérgete en la lectura</h1>
          <div className="header-desc">
            <span>Adéntrate en las categorías favoritas de nuestros lectores</span>
          </div>
        </div>
        <div className="categories-dive-items-container">
          <CategoryDiveItem />
          <CategoryDiveItem />
          <CategoryDiveItem />
          <CategoryDiveItem />
        </div>
      </div>
    </div>
  );
};

export default CategoriesDive;
