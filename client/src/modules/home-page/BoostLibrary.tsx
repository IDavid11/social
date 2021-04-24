import React from "react";
import Link from "next/link";

const BoostLibrary = () => {
  return (
    <section className="boost-library-container">
      <div className="boost-library-wrap">
        <div className="boost-library-item">
          <div className="item-header">
            <div className="item-header-text">
              <h1 className="item-title">Impulsa tu librería</h1>
              <div className="item-desc">
                Abre las puertas a los lectores locales y descubre todas las oportunidades que ofrece Local
                Library.
              </div>
            </div>
            <div className="item-header-button">
              <Link href="">
                <a className="button">Más información</a>
              </Link>
            </div>
          </div>
          <div className="item-img">
            <img src="/images/bookshop.jpg" height={75} width={75} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoostLibrary;
