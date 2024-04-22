import { state as counter } from "./state.js";

export default function Counter() {
  const counterPlus = () => counter.value++;
  const counterMinus = () => counter.value--;

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
  };

  const handleMinusClick = (event, c = counter) => {
    if (c < 0) {
      c *= -1;
    }
    counterMinus();
    createSpanElement(event, c + 1);
  };

  const handlePlusClick = (event, c = counter) => {
    if (c < 0) {
      c *= -1;
    }
    counterPlus();
    createSpanElement(event, c + 1);
  };

  return (
    <div className="wrapper">
      <h2 className="counter__title">Counter:</h2>
      <h1 className="counter__number">{counter.value}</h1>
      <button onClick={handleMinusClick} className="minus">
        - Minus
      </button>
      <button onClick={handlePlusClick} className="plus">
        Plus +
      </button>
    </div>
  );
}
