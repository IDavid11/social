import React, { useState, useEffect } from "react";
import { ILibrary } from "interfaces/ILibrary";
import CloseLibraryItem from "components/libraries/CloseLibraryItem";

interface Props {
  libraries: ILibrary[];
}

const CloseLibraries = ({ libraries }: Props) => {
  const [closeLibraries, setCloseLibraries] = useState<ILibrary[]>();

  const getCloseLibraries = () => {
    const formatedData = libraries.slice(0, 4).map((closeLibrary) => {
      // calcular proximidade ao usuario
      // de momento mostramos as 4 primeiras
      return {
        ...closeLibrary,
      };
    });
    setCloseLibraries(formatedData);
  };

  useEffect(() => {
    getCloseLibraries();
  }, []);

  return (
    <div className="close-libraries-container">
      <div className="close-libraries-wrap">
        <h1 className="close-libraries-title">Descubre librerías cercanas</h1>
        <div className="close-libraries-items-container">
          {closeLibraries?.map((closeLibrary) => {
            return <CloseLibraryItem closeLibrary={closeLibrary} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CloseLibraries;
