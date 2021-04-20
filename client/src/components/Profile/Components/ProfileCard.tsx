import React from "react";
import { IUser } from "interfaces/IUser";
import { Link } from "react-router-dom";
import { ILibrary } from "interfaces/ILibrary";
import { ILibraryProfile, IUserProfile } from "interfaces/IProfile";

interface Props {
  userProfile: IUserProfile | ILibraryProfile;
  pathname: string;
  img: any;
  title: string;
  description: string;
  span?: string;
}

const ProfileCard = ({ userProfile, pathname, img, title, description, span }: Props) => {
  return (
    <div className="menu-container">
      <Link
        to={{
          pathname: pathname,
          state: { user: userProfile },
        }}
        onClick={() => (window.location.href = pathname)}
      >
        <div className="menu">
          <div className="menu-img">
            <img className="icon" src={img} alt="" />
          </div>
          <div className="menu-text">
            <div className="menu-header container-flex">
              <div className="menu-title">{title}</div>
              <div className="menu-span fw-900">{span}</div>
            </div>
            <div className="menu-desc">{description}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProfileCard;
