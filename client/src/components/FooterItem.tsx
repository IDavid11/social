import React from "react";

interface Props {
  title: string;
  data: Array<string>;
}

const FooterItem = ({ title, data }: Props) => {
  return (
    <div className="footer-item">
      <div>
        <span className="item-title">{title}</span>
      </div>
      <div className="item-list">
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
    </div>
  );
};

export default FooterItem;
