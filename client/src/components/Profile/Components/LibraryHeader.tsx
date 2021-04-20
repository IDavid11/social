import React from "react";
import { ILibrary } from "interfaces/ILibrary";
import { ILibraryProfile } from "interfaces/IProfile";

const userImage = require("@images/image2.jpg");
const userUpdate = require("@logos/pencil.svg");
const userVerified = require("@logos/verified.png");

interface Props {
  libraryProfile: ILibraryProfile;
}

const LibraryHeader = ({ libraryProfile }: Props) => {
  return (
    <div className="profile-header">
      <div className="header-img">
        <img src={userImage} alt="" />
      </div>
      <div className="header-details">
        <div className="details-top">
          <div className="details-name">
            {/*<p className="user-name">{libraryProfile.library.libraryName}</p>*/}
          </div>
          <div className="details-checks">
            <span>
              <img className="icon" src={userVerified} alt="" />
            </span>
            <span>
              <img src="" alt="" />
            </span>
          </div>
        </div>
        <div className="details-bottom">
          <div className="details-stats">
            <div className="stats">
              <p>385</p>
              <p>Libros</p>
            </div>
            <div className="stats-divider"></div>
            <div className="stats">
              <p>50</p>
              <p>Seguidores</p>
            </div>
          </div>
          <div className="details-update">
            <span>
              <img className="icon" src={userUpdate} alt="" />
            </span>
            <p>Editar perfil</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryHeader;
