import React from "react";
import { webUrls } from "services/webUrls";
import Activity from "./Components/Activity";
import FavBook from "./Components/FavBook";
import FavCategory from "./Components/FavCategory";
import Goal from "./Components/Goal";
import Ranking from "./Components/Ranking";

const UserStats = () => {
  return (
    <div className="container-fw container-mt100">
      <div className="back">Back</div>
      <div className="container user-stats-container">
        <div className="left-stats">
          <h1>Metas</h1>
          <div className="goals-container">
            <Goal />
            <Goal />
            <Goal />
          </div>
          <div className="left-stats-flex">
            <div className="fav-categories-container">
              <h1>Géneros favoritos</h1>
              <div className="fav-categories-wrap">
                <FavCategory />
                <FavCategory />
                <FavCategory />
              </div>
            </div>
            <div className="books-wraps">
              <div className="fav-books-container">
                <div className="fav-books-header">
                  <h1>Libros favoritos</h1>
                  <span>
                    <a href="#">Ver todos</a>
                  </span>
                </div>
                <div className="fav-books-wrap">
                  <FavBook />
                  <FavBook />
                  <FavBook />
                </div>
              </div>
              <div className="fav-books-container">
                <div className="fav-books-header">
                  <h1>Libros leídos</h1>
                  <span>
                    <a href="#">Ver todos</a>
                  </span>
                </div>
                <div className="fav-books-wrap">
                  <FavBook />
                  <FavBook />
                  <FavBook />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-stats">
          <div className="ranking-container">
            <Ranking />
          </div>
          <div className="activity-container">
            <Activity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
