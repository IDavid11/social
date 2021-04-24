import BackpackLogo from "icons/BackpackLogo";
import BookExchangeLogo from "icons/BookExchangeLogo";
import MessageLogo from "icons/MessageLogo";
import SearchLogo from "icons/SearchLogo";
import UserLogo from "icons/UserLogo";
import Link from "next/link";
import React from "react";

const MobileNav = () => {
  return (
    <div className="mobile-nav-container">
      <nav className="nav">
        <Link href="/">
          <a className="nav-item focus">
            <div className="item-svg">
              <SearchLogo height={24} width={24} fill={"#000"} strokeWidth={"0"} />
            </div>
            <div className="item-text">Explora</div>
          </a>
        </Link>
        <Link href="">
          <a className="nav-item">
            <div className="item-svg">
              <BackpackLogo height={24} width={24} fill={"gray"} strokeWidth={"0"} />
            </div>
            <div className="item-text">Guardados</div>
          </a>
        </Link>
        <Link href="">
          <a className="nav-item">
            <div className="item-svg">
              <BookExchangeLogo height={24} width={24} fill={"gray"} strokeWidth={"0"} />
            </div>
            <div className="item-text">Intercambios</div>
          </a>
        </Link>
        <Link href="">
          <a className="nav-item">
            <div className="item-svg">
              <MessageLogo height={24} width={24} fill={"gray"} strokeWidth={"0"} />
            </div>
            <div className="item-text">Mensajes</div>
          </a>
        </Link>
        <Link href="">
          <a className="nav-item">
            <div className="item-svg">
              <UserLogo height={24} width={24} fill={"none"} strokeWidth={"1"} />
            </div>
            <div className="item-text">Perfil</div>
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default MobileNav;
