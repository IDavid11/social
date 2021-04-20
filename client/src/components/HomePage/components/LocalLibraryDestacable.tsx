import React from "react";
import LocalDestacable from "./LocalDestacable";

const securePaymentLogo = require("@logos/secure_payment.svg");
const tuckLogo = require("@logos/truck.svg");
const shopLogo = require("@logos/shop.svg");
const exchangeLogo = require("@logos/exchangeDestacable.svg");

const LocalLibraryDestacable = () => {
  return (
    <div className="container-fw local">
      <div className="container local-container">
        <div className="local-destacable-container">
          <LocalDestacable img={securePaymentLogo} text={"Compra segura"} />
          <LocalDestacable img={tuckLogo} text={"Envíos a domicilio"} />
          <LocalDestacable img={shopLogo} text={"Recogida en librerías"} />
          <LocalDestacable img={exchangeLogo} text={"Intercambio de libros seguro"} />
        </div>
      </div>
    </div>
  );
};

export default LocalLibraryDestacable;
