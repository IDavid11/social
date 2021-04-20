import React from "react";
import PotentialCard from "./PotentialCard";

const bookshopImage = require("@images/bookshop.jpg");
const sellImage = require("@images/sell_ll.jpg");
const bookExchangeImage = require("@images/book_exchange.jpg");

const Potential = () => {
  return (
    <div className="container-fw potential">
      <div className="container container-basic container-mt50">
        <div className="potential-container">
          <span className="title title-n1 fw-600">Únete a Local Library</span>
          <div className="container-flex potential-flex">
            <PotentialCard
              img={bookshopImage}
              title={"Ayuda al comercio local"}
              desc={"Compra en librerías cercanas a ti y ayuda con su crecimiento."}
            />
            <PotentialCard
              img={sellImage}
              title={"Vende en Local Library"}
              desc={"Únete y empieza a vender a todos los lectores de la web."}
            />
            <PotentialCard
              img={bookExchangeImage}
              title={"Intercambio de libros"}
              desc={"Intercambia ese libro que ya no lees por el que tanto deseas."}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Potential;
