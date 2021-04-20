import React from "react";

interface Props {
  img: string;
  title: string;
  desc: string;
}

const PotentialCard = ({ img, title, desc }: Props) => {
  return (
    <a className="potential-card">
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="card-details">
        <span className="title-n4 fw-600">{title}</span>
        <span className="desc">{desc}</span>
      </div>
    </a>
  );
};

export default PotentialCard;
