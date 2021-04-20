import React from "react";
import { ILibrary } from "interfaces/ILibrary";
import LibraryItem from "../Library";

const mapImage = require("@images/map.png");
const searchLogo = require("@logos/search.svg");
const alertLogo = require("@logos/alert.svg");

interface Props {
  libraries: ILibrary[];
}

const LibraryList = ({ libraries }: Props) => {
  return (
    <>
      <div className="title-n3">Encuentra tu librería local</div>
      <div className="container-search">
        <button>
          <div className="button-container container-flex-ac">
            <div className="button-text">Busca por librería, provincia, ciudad o código postal</div>
            <div className="button-img">
              <img className="icon" src={searchLogo} alt="" />
            </div>
          </div>
        </button>
      </div>
      <div className="container-mt50 container-flex">
        <div className="left">
          {libraries &&
            libraries.map((library) => {
              return <LibraryItem key={library._id} library={library} />;
            })}
        </div>
        <div className="right">
          <img className="map-img" src={mapImage} alt="" />
          <div className="report-new container-flex-ac">
            <span>
              <img className="icon" src={alertLogo} alt="" />
            </span>
            <span className="report-new-text">
              No encuentras la librería que estás buscando?
              <a className="fw-600" href="">
                Indícanos cuál es
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LibraryList;
