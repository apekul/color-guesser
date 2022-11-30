import React from "react";

export const ScoreBoard = ({ score }) => {
  return (
    <div className="score-group">
      {Object.entries(score).map((v, i) => (
        <div key={i}>
          <div>{v[0]}:</div>
          {v[1]}
        </div>
      ))}
    </div>
  );
};

export default ScoreBoard;
