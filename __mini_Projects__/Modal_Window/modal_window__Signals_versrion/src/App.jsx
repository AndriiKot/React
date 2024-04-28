import { signal } from "@preact/signals-react"
import './App.css'

let test1 = signal(11)

function App() {

  return (
    <>
      <h1>Modal Window</h1>
      <div>signal {test1.value}</div>
    </>
  )
}

export default App
