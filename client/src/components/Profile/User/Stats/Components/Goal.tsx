import React from "react";

const progressImage = require("@images/Progress.svg");
const rightArrowIcon = require("@logos/arrow-right.svg");

const Goal = () => {
  return (
    <div className="goal-container">
      <div className="goal-wrap">
        <div className="goal-header">
          <div className="header-text">Completar</div>
          <div>
            <img src={rightArrowIcon} alt="" />
          </div>
        </div>
        <div className="goal-body">
          <div className="goal-text">35</div>
          <div className="goal-progress">
            <div className="progress-component">
              <img src={progressImage} alt="" />
            </div>
          </div>
          <div className="goal-year">2021</div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
