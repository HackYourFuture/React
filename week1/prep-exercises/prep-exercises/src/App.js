import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);
  const handleCount = () => {
    if (count >= 10) {
      return () => setDisable(true);
    }
    setCount((prevCount) => prevCount + 1);
  };
  let feedback = ``;
  let dynamicClass = ``;
  if (count <= 0) {
    dynamicClass = `hidden `;
  }
  if (count > 0 && count < 10) {
    dynamicClass = ` white`;
  }
  if (count < 10) {
    <p>{(feedback = `"Keep counting..."`)}</p>;
  } else {
    <p>{(feedback = `"It's higher than 10!"`)} </p>;
    dynamicClass = `red`;
  }

  const Counter = () => {
    return (
      <div className={dynamicClass}>
        <h1>{feedback} </h1>
      </div>
    );
  };
  const Button = () => {
    return (
      <button disabled={disable} onClick={handleCount}>
        Add 1!
      </button>
    );
  };
  const Count = () => {
    return (
      <div className="white">
        <h1> {count} </h1>
      </div>
    );
  };

  return (
    <div className="App">
      <Counter />
      <Button />
      <Count />
    </div>
  );
}

export default App;
