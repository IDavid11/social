import React from "react";

const Activity = () => {
  return (
    <div className="activity-wrap">
      <div className="activity-header">
        <h1>Mi actividad</h1>
      </div>
      <div className="activity-year">
        <div className="read-books">
          <div className="label">Libros leídos en 2021</div>
          <div className="read-books">24 Libros</div>
        </div>
        <div className="actual-rank">
          <div className="label">Rank actual</div>
          <div className="rank">25</div>
        </div>
      </div>
      <div className="activity-stats"></div>
    </div>
  );
};

export default Activity;
