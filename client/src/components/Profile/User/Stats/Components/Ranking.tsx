import React from "react";
import Rank from "./Rank";

const Ranking = () => {
  return (
    <div className="ranking-wrap">
      <div className="ranking-header">
        <h1>Ranking</h1>
        <div className="ranking-filter">
          <button>2021</button>
        </div>
      </div>
      <div className="ranking">
        <Rank />
        <Rank />
        <Rank />
        <Rank />
        <Rank />
      </div>
    </div>
  );
};

export default Ranking;
