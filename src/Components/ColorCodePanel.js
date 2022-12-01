import React from "react";

export const ColorCodePanel = ({ setColorCode, colorCode }) => {
  return (
    <div className="color-panel flex">
      <h3>Currently: {colorCode ? "RGB" : "HEX"}</h3>
      <p>Change displayed color code</p>
      <button className="button" onClick={() => setColorCode(!colorCode)}>
        {!colorCode ? "to RGB" : "to HEX"}
      </button>
    </div>
  );
};

export default ColorCodePanel;
