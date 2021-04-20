import React from "react";
import { IUserProfile } from "interfaces/IProfile";

const userImage = require("@images/image2.jpg");
const userUpdate = require("@logos/pencil.svg");
const userVerified = require("@logos/verified.png");

interface Props {
  userProfile: IUserProfile;
}

const UserHeader = ({ userProfile }: Props) => {
  return (
    <div className="profile-header">
      <div className="header-img">
        <img src={userImage} alt="" />
      </div>
      <div className="header-details">
        <div className="details-top">
          <div className="details-name">
            <p className="user-name">{`${userProfile.user.name} ${userProfile.user.lastName}`}</p>
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
              <p>172</p>
              <p>Libros</p>
            </div>
            <div className="stats-divider"></div>
            <div className="stats">
              <p>50</p>
              <p>Amigos</p>
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

export default UserHeader;
