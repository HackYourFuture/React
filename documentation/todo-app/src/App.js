import React, { Component } from "react";
import "./App.css";
import AddTaskItem from "./components/AddTaskItem";
import TasksList from "./components/TasksList";

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sam's first homework Week 1</h1>
        </header>
        <div>
          <p> The static todo list: </p>
          <AddTaskItem />
          <TasksList />
        </div>
      </div>
    );
  }
}

export default App;
