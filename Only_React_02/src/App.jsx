import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const number = "02";
  return (
    <>
      <h1>
        Only React {number} <img src={reactLogo} alt="React" />
      </h1>
      <p>Andrii  </p>
      <p>https://github.com/AndriiKot</p>
    </>
  );
}

export default App;
