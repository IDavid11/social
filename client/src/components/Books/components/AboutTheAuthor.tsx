import { IBook } from "interfaces/IBook";
import React from "react";

const plusLogo = require("@logos/plus.svg");

interface Props {
  book: IBook;
}

const AboutTheAuthor = ({ book }: Props) => {
  return (
    <div className="container">
      <div className="about-author-container">
        <div className="about-author-left">
          <div className="about-author-left-title">Sobre el autor</div>
          <div className="flex">
            <div className="about-author-left-img">
              <img src={book.coverPage} alt="" />
            </div>
            <div className="about-author-left-details">
              <p>{book.author}</p>
              <div className="about-author-left-ratio">
                <p>Author ratio</p>
                <p>Ver opiniones</p>
              </div>
              <button>
                <div className="button-container">
                  <div className="button-img">
                    <img className="icon" src={plusLogo} alt="" />
                  </div>
                  <div className="button-text">Seguir</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="about-author-right">
          <div className="about-author-right-text">
            <p>
              Nullam ultrices placerat enim. Aenean nibh tortor, cursus eu dapibus eu, sagittis nec quam.
              Curabitur ligula erat, finibus ut erat eget, ultricies laoreet lorem. Vivamus tempor tortor
              justo, vitae pharetra velit aliquet id. Integer ut rutrum nunc. Vestibulum lobortis erat in nisl
              scelerisque, quis faucibus dolor tristique. Proin eget dolor tristique, vulputate odio eu,
              pretium ante. Pellentesque lacinia massa mollis enim varius, eu lobortis velit hendrerit.
              Maecenas luctus, diam sit amet ultricies malesuada, augue lorem porttitor lacus, sit amet
              hendrerit odio ante a mi. Morbi eu elit ac augue fermentum varius vel eget libero. Nulla vitae
              nunc tellus. Integer nec justo vel turpis malesuada ornare eu eu lacus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTheAuthor;
