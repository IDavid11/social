import React, { useState, useEffect, ChangeEvent } from "react";
import { IUser } from "interfaces/IUser";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Props {
  label: string;
  inputType: string;
  inputName: string;
  value: string;
  focusValue: boolean;
  handleInputChange: (e: InputChange) => void;
}

const FloatContainer = ({ label, inputType, inputName, value, focusValue, handleInputChange }: Props) => {
  return (
    <>
      {focusValue === true ? (
        <div className="field field-mb1 float-container active">
          <label className="field-label" htmlFor="name">
            {label}
          </label>
          <input
            className="field-input"
            type={inputType}
            name={inputName}
            value={value}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        <div className="field field-mb1 float-container">
          <label className="field-label" htmlFor="name">
            {label}
          </label>
          <input
            className="field-input"
            type={inputType}
            name={inputName}
            value={value}
            onChange={handleInputChange}
          />
        </div>
      )}
    </>
  );
};

export default FloatContainer;
