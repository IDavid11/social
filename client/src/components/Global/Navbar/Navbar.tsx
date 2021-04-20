import React, { useState, useEffect } from "react";
import { webUrls } from "services/webUrls";

const mobile_left_nav = require("@logos/mobile-menu.png");
const user_icon = require("@logos/user.png");
const searchLogo = require("@logos/search.svg");

const Navbar = () => {
  const [focus, setFocus] = useState(false);

  const [leftClick, setLeftClick] = useState(false);
  const handleLeftClick = () => setLeftClick(!leftClick);

  const [rightClick, setRightClick] = useState(false);
  const handleRightClick = () => setRightClick(!rightClick);

  const [isLogged, setIsLogged] = useState(false);
  const token = localStorage.getItem("token");

  const handleFocus = (e) => {
    if (e.target.value !== "") {
      setFocus(true);
    } else {
      setFocus(false);
    }
  };

  useEffect(() => {
    if (!token) {
      return setIsLogged(false);
    }
    setIsLogged(true);
  }, [token]);

  return (
    <div className="container-fw">
      <header>
        <div className="container">
          <div className="nav">
            <div onClick={handleLeftClick} className="mobile-left-nav">
              <img src={mobile_left_nav} className="icon icon-interactive" alt="" />
            </div>
            <div className="c-left-nav">
              <h1>
                <a className="title-n2" href="/">
                  Local Library
                </a>
              </h1>
              <div className={leftClick ? "left-nav l-active" : "left-nav"}>
                <ul>
                  <li>
                    <a href={webUrls.urlBooks}>Libros</a>
                  </li>
                  <li>
                    <a href="/books/categories">Categorías</a>
                  </li>
                  <li>
                    <a href={webUrls.urlLibraries}>Librerías</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="c-center-nav">
              <div className="nav-search-container">
                <div className="nav-search">
                  <div className="nav-search-input">
                    {focus === false ? (
                      <label className="search-label" htmlFor="search">
                        Título, ISBN, Autor, Código Postal, Ciudad...
                      </label>
                    ) : (
                      <label></label>
                    )}
                    <input className="search-input" name="search" type="text" onChange={handleFocus} />
                  </div>
                  <div className="nav-search-icon">
                    <img className="icon" src={searchLogo} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className={rightClick ? "right-nav r-active" : "right-nav"}>
              <ul>
                {isLogged ? (
                  <>
                    <li>
                      <span>
                        <a href={webUrls.urlUser}>
                          <img className="icon" src={user_icon} alt="" />
                        </a>
                      </span>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <a href={webUrls.urlLogin}>Iniciar sesión</a>
                    </li>
                    <li>
                      <a href={webUrls.urlUserRegister}>Registrarse</a>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div onClick={handleRightClick} className="mobile-right-nav">
              <img src={user_icon} className="icon icon-interactive" alt="" />
            </div>
          </div>
        </div>
      </header>
      <div className="nav-mt"></div>
    </div>
  );
};

export default Navbar;
