import "./style.css";
import React, { useState, useEffect } from "react";

function App() {
  const [list, setList] = useState([]);
  const [answer, setAnswer] = useState();

  function randomRGB() {
    let obj = { r: 0, g: 0, b: 0 };
    Object.keys(obj).map((v) => (obj[v] = Math.floor(Math.random() * 255)));
    return "rgb(" + obj.r + "," + obj.g + "," + obj.b + ")";
  }

  const check = (e) => {
    return e === answer ? console.log("WIN") : console.log("LOOSE");
  };

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(randomRGB());
    }
    setList(arr);
    setAnswer(arr[Math.floor(Math.random() * 3)]);
  }, []);

  return (
    <div className="container">
      <div className="group">
        <div
          className="display"
          id="test"
          style={{
            backgroundColor: answer,
          }}
        >
          ????
        </div>
        <div className="buttons">
          {list.map((v, i) => (
            <button value={v} onClick={(e) => check(e.target.value)} key={i}>
              {v}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
