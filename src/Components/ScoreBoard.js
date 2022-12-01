import React from "react";

export const ScoreBoard = ({ score }) => {
  return (
    <div className="score-group flex">
      {Object.entries(score).map((v, i) => (
        <div key={i}>
          <>
            <div>{v[0]}:</div>
            <div className="score-items">{v[1]}</div>
          </>
        </div>
      ))}
    </div>
  );
};

export default ScoreBoard;
