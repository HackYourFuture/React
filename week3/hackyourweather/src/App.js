import React from "react";
import "./App.css";
// d 
import CitiesList from "./components/CitiesList";
function App() {
  return (
    <div>
      <h1 className="title">Weather</h1>
      <div>
      <div className="App">
          <CitiesList />
      </div>

      </div>
    </div>
  );
}

export default App;
