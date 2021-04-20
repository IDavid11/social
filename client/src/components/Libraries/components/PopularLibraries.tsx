import React from "react";
import { ILibrary } from "interfaces/ILibrary";
import LibraryItem from "../Library";

interface Props {
  libraries: ILibrary[];
}
const PopularLibraries = ({ libraries }: Props) => {
  return (
    <>
      <div className="close-libraries-container">
        <div className="title-n3">Librerías destacadas</div>
        <div className="container-flex close-libraries">
          {libraries &&
            libraries.map((library) => {
              return <LibraryItem key={library._id} library={library} />;
            })}
        </div>
      </div>
    </>
  );
};

export default PopularLibraries;
