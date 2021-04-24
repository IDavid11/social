import Link from "next/link";
import React from "react";

const CategoryDiveItem = () => {
  return (
    <div className="category-dive-item-container">
      <Link href="" as="">
        <a className="category-dive-ancore">
          <div className="category-dive-item">
            <div className="item-img">
              <img src="/images/sciencie.jpg" alt="" />
            </div>
            <div className="item-title">
              <span>Ciencia ficción</span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CategoryDiveItem;
