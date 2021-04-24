import React, { useState, useEffect } from "react";
import { isServer } from "../lib/isServer";
import Link from "next/link";
import SearchButton from "./SearchButton";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (!isServer) {
      const token = localStorage.getItem("token");
      if (!token) return setIsLogged(false);
      setIsLogged(true);
    }
  }, []);

  return (
    <div className="navbar-container">
      <header className="header">
        <nav className="nav">
          <div className="left-col">
            <div className="left-col-title">
              <h1>
                <Link href="/">
                  <a>Local Library</a>
                </Link>
              </h1>
            </div>
            <div className="left-col-nav">
              <ul>
                <li>
                  <Link href="/books">
                    <a>Libros</a>
                  </Link>
                </li>
                <li>
                  <Link href="/categories">
                    <a>Categorías</a>
                  </Link>
                </li>
                <li>
                  <Link href="/libraries">
                    <a>Librerías</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="medium-col">
            <SearchButton />
          </div>
          <div className="right-col">
            <UserMenu />
          </div>
        </nav>
      </header>
      <div className="nav-mt"></div>
    </div>
  );
};

export default Navbar;
