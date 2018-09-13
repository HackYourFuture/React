import React, { Component } from "react";
import "./App.css";
import List from "./Components/List";
import NewTodoForm from "./Components/NewTodoForm";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <List />
        <NewTodoForm />
      </div>
    );
  }
}
