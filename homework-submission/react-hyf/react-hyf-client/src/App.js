import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PreviousHomeworks from "./PreviousHomeworks";
import HomeworkWeek3 from "./HomeworkWeek3";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <HomeworkWeek3 />

          <h1>Previous Homework</h1>
          <PreviousHomeworks />
        </header>
      </div>
    );
  }
}

export default App;
