import React from "react";
import Image from "next/image";

interface Props {
  img: string;
  desc: string;
}

const ComeItem = ({ img, desc }: Props) => {
  return (
    <div className="come-item-container">
      <div className="come-item">
        <div className="img-container">
          <div className="img-padding">
            <div className="img-wrap">
              <Image src={img} width={243} height={243} />
            </div>
          </div>
        </div>
        <span>{desc}</span>
      </div>
    </div>
  );
};

export default ComeItem;
