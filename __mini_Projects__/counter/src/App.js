import './normalize.css';
import './index.css';
import './App.css';

function App() {
  let counter = 11;
  return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1>{counter}</h1>
        <button className="minus">- Minus</button>
        <button className="plus">Plus +</button>
      </div>
    </div>
  );
}

export default App;