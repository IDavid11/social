import React from "react";

const starLogo = require("@logos/star.svg");

const Opinions = () => {
  return (
    <div className="container">
      <div className="opinions-container">
        <div className="left-container">
          <div className="left-container-title">Opiniones de clientes</div>
          <div className="left-container-ratio">
            <div className="stars">
              <img className="icon" src={starLogo} alt="" />
              <img className="icon" src={starLogo} alt="" />
              <img className="icon" src={starLogo} alt="" />
              <img className="icon" src={starLogo} alt="" />
            </div>
            <div className="text">4.2 de 5</div>
          </div>
          <div className="left-container-total-valorations">356 valoraciones</div>
          <div className="left-container-stats-stars">
            <ul>
              <li>
                <div className="stat">
                  <p>5 estrellas</p>
                  <div className="stats-range"></div>
                  <p>65%</p>
                </div>
              </li>
              <li>
                <div className="stat">
                  <p>4 estrellas</p>
                  <div className="stats-range"></div>
                  <p>65%</p>
                </div>
              </li>
              <li>
                <div className="stat">
                  <p>3 estrellas</p>
                  <div className="stats-range"></div>
                  <p>65%</p>
                </div>
              </li>
              <li>
                <div className="stat">
                  <p>2 estrellas</p>
                  <div className="stats-range"></div>
                  <p>65%</p>
                </div>
              </li>
              <li>
                <div className="stat">
                  <p>1 estrella</p>
                  <div className="stats-range"></div>
                  <p>65%</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-container"></div>
      </div>
    </div>
  );
};

export default Opinions;
