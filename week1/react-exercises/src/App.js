import React from "react";
import "./App.css";
import HobbyList from "./ex-1/HobbyList";
import Excercise2 from "./ex-2/guarantee";
import Counter from "./ex-3/counter";

function App() {
  return (
    <div className="App">
      <h1>Excercise 1</h1>
      <HobbyList />
      <h1>Excercise 2</h1>
      <div className="excercise2">
        <Excercise2 />
      </div>
      <h1>Excercise 3</h1>
      <Counter />
    </div>
  );
}

export default App;
