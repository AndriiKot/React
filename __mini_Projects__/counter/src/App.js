import "./normalize.css";
import "./index.css";
import "./App.css";
import React, { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  const counterPlus = () => setCounter(counter + 1);
  const counterMinus = () => setCounter(counter - 1);

  const createSpanElement = (event, count = 0) => {
    for (let i = 0; i < count; i++) {
      const square = document.createElement("span");
      square.classList.add("square");
      event.target.append(square);

      const randomX = (Math.random() - 0.5) * window.innerWidth;
      const randomY = (Math.random() - 0.5) * window.innerHeight;

      square.style.setProperty("--x", randomX + "px");
      square.style.setProperty("--y", randomY + "px");

      square.style.height = Math.random() * (60 - 10) + 10 + "%";
      setTimeout(() => square.remove(), 2000);
    }
    const [coordinatesX, coordinatesY, el] =
      getCoordinatesXandY(".counter__number");

    console.log(coordinatesX, coordinatesY, el);

    document.body.style.setProperty(`--x-${el.className}`, (coordinatesX - 1000) + "px");
    document.body.style.setProperty(`--y-${el.className}`, (coordinatesY - 1000) + "px");
 
    console.dir(el);
  };



  const getCoordinatesXandY = (className, el) => {
    el = document.querySelector(className);
    const rect = el.getBoundingClientRect();
    console.log(rect.x);
    console.log(rect.y);
    return [rect.x, rect.y, el];
  };
  const handleMinusClick = (event) => {
    counterMinus();
    createSpanElement(event, 50);
  };

  const handlePlusClick = (event) => {
    counterPlus();
    createSpanElement(event, 50);
  };

  return (
    <div className="App__counter">
      <div className="wrapper">
        <h2 className="counter__title">Counter:</h2>
        <h1 className="counter__number">{counter}</h1>
        <button onClick={handleMinusClick} className="minus">
          - Minus
        </button>
        <button onClick={handlePlusClick} className="plus">
          Plus +
        </button>
      </div>
    </div>
  );
}

export default App;
