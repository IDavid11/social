import React from "react";
import { ILibrary } from "interfaces/ILibrary";
import Link from "next/link";
import LocationLogo from "icons/LocationLogo";

interface Props {
  closeLibrary: ILibrary;
}

const CloseLibraryItem = ({ closeLibrary }: Props) => {
  return (
    <div className="close-library-item-container">
      <Link href={`/libraries/[id]`} as={`/libraries/${closeLibrary._id}`}>
        <a className="close-library-ancore">
          <div className="close-library-item">
            <div className="close-library-img">
              <img src={closeLibrary.image} alt={closeLibrary.libraryName} />
            </div>
            <div className="close-library-details">
              <div className="details">
                <div className="close-library-name">{closeLibrary.libraryName}</div>
                <div className="close-library-address">
                  <LocationLogo height={12} />
                  <span>A Estrada, Pontevedra</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CloseLibraryItem;
