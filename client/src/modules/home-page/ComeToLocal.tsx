import ComeItem from "components/ComeItem";
import React from "react";

const ComeToLocal = () => {
  return (
    <div className="come-container">
      <div className="come-wrap">
        <div className="come-title">Únete a Local Library</div>
        <div className="come-items-container">
          <ComeItem img={"/images/bookshop.jpg"} desc={"Ayuda al comercio local"} />
          <ComeItem img={"/images/sell_ll.jpg"} desc={"Vende en Local Library"} />
          <ComeItem img={"/images/book_exchange.jpg"} desc={"Intercambio de libros"} />
        </div>
      </div>
    </div>
  );
};

export default ComeToLocal;
