import "./normalize.css";
import "./index.css";
import "./App.css";
import React, { useState } from 'react';

function App() {
  let [counter, setCounter] = useState(0);

  const counterPlus = () => setCounter(counter + 1);
  const counterMinus = () => setCounter(counter - 1);
  
  return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1>{counter}</h1>
        <button onClick={counterMinus} className="minus">- Minus</button>
        <button onClick={counterPlus} className="plus">
          Plus +
        </button>
      </div>
    </div>
  );
}

export default App;
