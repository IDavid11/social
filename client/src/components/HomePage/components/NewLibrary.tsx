import React from "react";
import { ILibrary } from "interfaces/ILibrary";
import Check from "components/Libraries/components/Check";

const locationLogo = require("@logos/location2.svg");

interface Props {
  library: ILibrary;
}

const NewLibrary = ({ library }: Props) => {
  return (
    <div className="item">
      <div className="item-img">
        <img src="src/static/images/libreria1.jpg" alt="" />
      </div>
      <div className="item-details">
        <h3>{library.libraryName}</h3>
        <div className="details-address">
          <span>
            <img className="icon" src={locationLogo} alt="" />
          </span>
          {library.address ? (
            <p>{`${library.address.ciudad}, ${library.address.provincia}`}</p>
          ) : (
            <p>Undefined</p>
          )}
        </div>
        <p>Valoración</p>
        <div className="details-checks">
          <Check library={library} check={library.checks.compraEnTienda} text={"Compra en tienda"} />
          <Check library={library} check={library.checks.recogidaEnTienda} text={"Recogida en tienda"} />
          <Check library={library} check={library.checks.aDomicilio} text={"A domicilio"} />
          <Check library={library} check={library.checks.pedidos} text={"Pedidos"} />
        </div>
      </div>
    </div>
  );
};

export default NewLibrary;
