import "./style.css";
import React, { useState, useEffect } from "react";
import { ScoreBoard } from "./Components/ScoreBoard";
import { ColorCodePanel } from "./Components/ColorCodePanel";

function App() {
  const [list, setList] = useState([]);
  const [answer, setAnswer] = useState();
  const [score, setScore] = useState({ points: 0, attempts: 0 });
  const [colorCode, setColorCode] = useState(false);

  function randomRGB() {
    let obj = { r: 0, g: 0, b: 0 };
    Object.keys(obj).map((v) => (obj[v] = Math.floor(Math.random() * 255)));

    return colorCode
      ? "rgb(" + obj.r + "," + obj.g + "," + obj.b + ")"
      : "#" +
          Object.keys(obj)
            .map((v) => obj[v].toString(16))
            .join("");
  }

  const check = (e) => {
    const { value } = e.target;
    return value === answer
      ? setScore((prev) => ({ ...prev, points: prev.points + 1 }))
      : setScore((prev) => ({ ...prev, attempts: prev.attempts + 1 }));
  };

  const startQuiz = () => {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push(randomRGB());
    }
    setList(arr);
    setAnswer(arr[Math.floor(Math.random() * 4)]);
  };

  useEffect(() => {
    startQuiz();
  }, [colorCode]);

  useEffect(() => {
    startQuiz();
  }, [score.points]);

  return (
    <div className="container">
      <ScoreBoard score={score} />
      <div className="group flex">
        <div
          className="display flex"
          style={{
            backgroundColor: answer,
          }}
        >
          Guess the color
        </div>
        <div className="buttons flex">
          {list.map((v, i) => (
            <button
              className="button"
              value={v}
              onClick={(e) => check(e)}
              key={i}
            >
              {v}
            </button>
          ))}
        </div>
      </div>
      <ColorCodePanel colorCode={colorCode} setColorCode={setColorCode} />
    </div>
  );
}

export default App;
