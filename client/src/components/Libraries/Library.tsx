import React from "react";
import { ILibrary } from "interfaces/ILibrary";
import Check from "components/Libraries/components/Check";

const locationLogo = require("@logos/location.svg");

interface Props {
  library: ILibrary;
}

const Library = ({ library }: Props) => {
  const isRated = library.ratio.length;

  return (
    <div className="library-card-container">
      <div className="library-card container-flex">
        <div className="library-img">
          <img src={library.image} alt="" />
        </div>
        <div className="library-details">
          <span className="title-n4 fw-600 pl-2">{library.libraryName}</span>
          {/* MOSTRAR AQUI REWARD DA LIBRERÍA*/}
          <div className="details-address container-flex-ac">
            <span>
              <img className="icon" src={locationLogo} alt="" />
            </span>
            <span className="detail">{`${library.address.ciudad}, ${library.address.provincia}`}</span>
          </div>
          {isRated !== 0 ? (
            <span className="detail pl-2">{library.ratio}</span>
          ) : (
            <span className="small-detail pl-5">Todavía no hay evaluaciones</span>
          )}
          <div className="details-checks">
            <Check library={library} check={library.checks.compraEnTienda} text={"Compra en tienda"} />
            <Check library={library} check={library.checks.recogidaEnTienda} text={"Recogida en tienda"} />
            <Check library={library} check={library.checks.aDomicilio} text={"A domicilio"} />
            <Check library={library} check={library.checks.pedidos} text={"Pedidos"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
