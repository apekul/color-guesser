import "./style.css";
import React, { useState, useEffect } from "react";
import { ScoreBoard } from "./Components/ScoreBoard";

function App() {
  const [list, setList] = useState([]);
  const [answer, setAnswer] = useState();
  const [score, setScore] = useState({ points: 0, attempts: 0 });

  function randomRGB() {
    let obj = { r: 0, g: 0, b: 0 };
    Object.keys(obj).map((v) => (obj[v] = Math.floor(Math.random() * 255)));
    return "rgb(" + obj.r + "," + obj.g + "," + obj.b + ")";
  }

  const check = (e) => {
    const query = e === answer;
    query
      ? setScore((prev) => ({ ...prev, points: prev.points + 1 }))
      : setScore((prev) => ({ ...prev, attempts: prev.attempts + 1 }));
    return;
  };

  const StartQuiz = () => {
    let arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(randomRGB());
    }
    setList(arr);
    setAnswer(arr[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    StartQuiz();
  }, [score.points]);

  useEffect(() => {
    function startQuiz() {
      return console.log("reloged");
    }
  }, []);

  return (
    <div className="container">
      <ScoreBoard score={score} />
      <div className="group">
        <div
          className="display"
          id="test"
          style={{
            backgroundColor: answer,
          }}
        >
          Guess the color
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
