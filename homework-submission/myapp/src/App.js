import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import ItemList from "./components/itemList";
import AddMenu from "./components/addMenu";
import { observer, inject } from "mobx-react";

@inject("todoStore")
@observer
class App extends Component {
  render() {
    const { todoStore } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <AddMenu />
        <h2>
          {todoStore.numbersOfTodos <= 1
            ? `You have ${todoStore.numbersOfTodos} todo in your list`
            : `You have ${todoStore.numbersOfTodos} todos in your list`}
        </h2>
        <ItemList />
      </div>
    );
  }
}

export default App;
