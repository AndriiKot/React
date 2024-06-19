"use strict";

const container = document.querySelector(".container");

const root = ReactDOM.createRoot(container);

<h1 className="title__React-App">React App</h1>;

function App(props) {
  const [counter, setCounter] = React.useState(0);
  const [hiddenTitle, setHiddenTitle] = React.useState(true);

  return (
    <div>
      {hiddenTitle && <h1>{props.title}</h1>}
      <button
        className="btn"
        type="submit"
        onClick={() => setCounter(counter + 1)}
      >
        {props.labeledButton} {counter}
      </button>
      <button onClick={() => setHiddenTitle(!hiddenTitle)}>
        {!hiddenTitle ? "Show" : "Hide"} Title
      </button>
    </div>
  );
}

root.render(<App title="React App" labeledButton="Counter: " />);
