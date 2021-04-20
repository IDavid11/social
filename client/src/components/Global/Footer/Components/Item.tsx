import React from "react";

interface Props {
  title: string;
  data: Array<string>;
}

const Item = ({ title, data }: Props) => {
  return (
    <div className="footer-item">
      <p className="footer-item-title">{title}</p>
      <ul>
        {data.map((dat) => {
          return (
            <li>
              <a href="">{dat}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Item;
