import MenuLogo from "icons/MenuLogo";
import UserLogo from "icons/UserLogo";
import React from "react";

const UserMenu = () => {
  return (
    <button className="user-menu">
      <div className="user-component">
        <MenuLogo />
        <UserLogo />
      </div>
    </button>
  );
};

export default UserMenu;
