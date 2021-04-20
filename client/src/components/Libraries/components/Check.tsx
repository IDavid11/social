import React from "react";
import { ILibrary } from "interfaces/ILibrary";

const checkLogo = require("@logos/check.svg");
const crossLogo = require("@logos/cross.svg");

interface Props {
  library: ILibrary;
  check: boolean;
  text: string;
}

const Check = ({ library, check, text }: Props) => {
  return (
    <div className="check">
      <span>
        {check === true ? (
          <img className="icon" src={checkLogo} alt="" />
        ) : (
          <img className="icon" src={crossLogo} alt="" />
        )}
      </span>
      <span className="check-text">{text}</span>
    </div>
  );
};

export default Check;
