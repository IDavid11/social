import React from "react";

const heroImage = require("@wallpapers/potter.jpg");

const Hero = () => {
  return (
    <main className="main">
      <div className="container-fw hero">
        <div className="background-img">
          <img src={heroImage} alt="" />
        </div>
        <div className="container-fw container container-basic">
          <div className="container-hero">
            <div className="hero-wrap">
              <div className="fw-700 hero-title">
                <span>Compra local</span>
              </div>
              <a className="button hero-button" href="">
                <span className="fw-600">Descubre librerías cercanas</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
