import './App.css'
import { signal } from '@preact/signals-react'
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App__counter">
      <Counter />
    </div>
  );
}

export default App;



