import React, { useEffect, ChangeEvent } from "react";

const avoidCheckboxLogo = require("@logos/avoid-checkbox.svg");
const checkboxLogo = require("@logos/checkbox.svg");

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Props {
  inputName: string;
  checkName: string;
  value: string;
  stockCheckProperty: boolean;
  stockCheck: any;
  setStockCheck: React.Dispatch<React.SetStateAction<Object>>;
  handleInputChange: (e: InputChange) => void;
  handleClickCheck: (e: any) => void;
}

const StockForm = ({
  stockCheck,
  setStockCheck,
  stockCheckProperty,
  inputName,
  value,
  checkName,
  handleInputChange,
  handleClickCheck,
}: Props) => {
  const handleClick = (e) => {
    setStockCheck({ ...stockCheck, [e.target.name]: !stockCheck[e.target.name] });
  };

  return (
    <div className="stock-wrap">
      <div className="stock-title title-n6 fw-600">Stock</div>
      <div className="stock-form">
        <div className="check-wrap">
          <div className="button-container">
            <button name={checkName} onClick={handleClickCheck}></button>
            {stockCheckProperty !== true ? (
              <img className="icon" src={avoidCheckboxLogo} alt="" />
            ) : (
              <img className="icon" src={checkboxLogo} alt="" />
            )}
          </div>
          <div className="check-text">Ofertado</div>
        </div>
        <div className="stock-input">
          <label className="label" htmlFor="stock">
            Stock:
          </label>
          <input name={inputName} value={value} type="text" onChange={handleInputChange} />
        </div>
        <div className="check-wrap">
          <div className="button-container">
            <button></button>
            <img className="icon" src={avoidCheckboxLogo} alt="" />
          </div>
          <div className="check-text">Stock ilimitado</div>
        </div>
      </div>
    </div>
  );
};

export default StockForm;
