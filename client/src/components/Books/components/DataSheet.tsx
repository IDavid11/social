import React from "react";

const reportLogo = require("@logos/report.svg");

const DataSheet = () => {
  return (
    <div className="container">
      <div className="data-sheet-container">
        <div className="data-sheet">
          <div className="data-sheet-title">Ficha técnica</div>
          <div className="data-sheet-details">
            <ul>
              <li>Editorial: </li>
              <li>Idioma: </li>
              <li>Páginas: </li>
              <li>Formato: </li>
              <li>ISBN: </li>
              <li>Opinión de los clientes: </li>
              <li>Clasificación de los más vendidos: </li>
            </ul>
          </div>
        </div>
        <div className="report-container">
          <div className="report">
            <div className="report-img">
              <img src={reportLogo} alt="" />
            </div>
            <div className="report-title">Avisar de error</div>
            <div className="report-description">
              <p>Informa sobre algún error en la información del libro</p>
            </div>
            <button>Reportar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSheet;
