import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { urls } from "services/urls";
import UserMenu from "./Components/UserMenu";
import LibraryMenu from "./Components/LibraryMenu";
import { instance } from "services/axios";
import UserHeader from "./Components/UserHeader";
import LibraryHeader from "./Components/LibraryHeader";
import { ILibraryProfile, IUserProfile } from "interfaces/IProfile";

const Profile = () => {
  const [profileUser, setProfileUser] = useState<IUserProfile>();
  const [profileLibrary, setProfileLibrary] = useState<ILibraryProfile>();
  const [isUser, setIsUser] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) window.location.href = `${urls.urlLogin}`;
    instance.get(urls.urlProfile).then((res) => {
      for (var i = 0; i < res.data.baseUser.roles.length; i++) {
        if (res.data.baseUser.roles[i] === "6076ff448ef6223e08ef3ce9") {
          setProfileUser(res.data);
          setIsUser(true);
        } else if (res.data.baseUser.roles[i] === "library") {
          setProfileLibrary(res.data);
          setIsUser(false);
        }
      }
      console.log(res.data);
    });
  }, [token]);

  return (
    <div className="container-fw container-mt100 container-profile">
      <div className="container profile-container">
        {isUser === true ? (
          <Router>
            <UserHeader userProfile={profileUser} />
            <div className="profile-body">
              <UserMenu userProfile={profileUser} />
            </div>
          </Router>
        ) : (
          <Router>
            <LibraryHeader libraryProfile={profileLibrary} />
            <div className="profile-body">
              <LibraryMenu libraryProfile={profileLibrary} />
            </div>
          </Router>
        )}
      </div>
    </div>
  );
};

export default Profile;
