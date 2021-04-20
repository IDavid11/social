import React from "react";

interface Props {
  img: string;
  text: string;
}

const LocalDestacable = ({ img, text }: Props) => {
  return (
    <div className="local-destacable">
      <div className="destacable-img">
        <img src={img} alt="" />
      </div>
      <div className="destacable-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default LocalDestacable;
