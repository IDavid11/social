import React, { ChangeEvent } from "react";

const avoidCheckboxLogo = require("@logos/avoid-checkbox.svg");
const checkboxLogo = require("@logos/checkbox.svg");

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Props {
  checkName: string;
  actualPriceValue: string;
  actualPriceName: string;
  newPriceValue: string;
  newPriceName: string;
  handleInputChange: (e: InputChange) => void;
}

const PriceForm = ({
  checkName,
  actualPriceValue,
  actualPriceName,
  newPriceValue,
  newPriceName,
  handleInputChange,
}: Props) => {
  return (
    <div className="price-wrap">
      <div className="price-title title-n6 fw-600">Precio</div>
      <div className="price-form-wrap">
        <div className="price-form">
          <div className="check-wrap">
            <div className="button-container">
              <button name={checkName}></button>
              <img className="icon" src={avoidCheckboxLogo} alt="" />
            </div>
            <div className="check-text">Oferta</div>
          </div>
          <div className="row">
            <div>Precio actual:</div>
            <input
              value={actualPriceValue}
              name={actualPriceName}
              onChange={handleInputChange}
              className="input-row-price actual-price"
              type="text"
            />
          </div>
          <div className="row">
            <div>Descuento:</div>
            <input className="input-row-price" type="text" />
          </div>
          <div className="row">
            <div>Descuento en porcentaje:</div>
            <input className="input-row-price" type="text" />
          </div>
        </div>
        <div className="price-result">
          <div className="row">
            <div>Precio final:</div>
            <input
              value={newPriceValue}
              name={newPriceName}
              onChange={handleInputChange}
              className="input-row-price final-price"
            />
          </div>
          <div className="row">
            <div>Rebaja de:</div>
            <div className="row-result">{"5%"}</div>
            <div className="row-result">{"(-2,25 €)"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceForm;
