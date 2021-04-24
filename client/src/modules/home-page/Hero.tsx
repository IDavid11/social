import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="main">
      <div className="container-fw hero">
        <div className="background-img">
          <Image src="/images/potter.jpg" alt="Wallpaper" layout="fill" />
        </div>
        <div className="container-fw container container-basic">
          <div className="container-hero">
            <div className="hero-wrap">
              <div className="fw-700 hero-title">
                <span>Compra local</span>
              </div>
              <Link href="/libraries">
                <a className="button hero-button">
                  <span>Descubre librerías cercanas</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
