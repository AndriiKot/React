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
      const spark = document.createElement("span");
      spark.classList.add("spark");
      event.target.append(spark);

      setTimeout(() => spark.remove(), 2000);
    }
    console.dir(event.target);
  };

  const handleMinusClick = (event) => {
    counterMinus();
    createSpanElement(event, 50);
  };

  return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1>{counter}</h1>
        <button onClick={handleMinusClick} className="minus">
          - Minus
        </button>
        <button onClick={counterPlus} className="plus">
          Plus +
        </button>
      </div>
    </div>
  );
}

export default App;
