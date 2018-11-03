import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import ItemList from "./components/itemList";
import Data from "./data/data";
import AddMenu from "./components/addMenu";

class App extends Component {
  state = { Data };

  handleCheck = id => {
    const newData = this.state.Data.map(item => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });

    this.setState({ Data: newData });
  };

  handleAdd = (name, deadline) => {
    const newId = this.state.Data.length;
    const addedData = this.state.Data;
    const addition = {
      id: newId,
      name,
      deadline,
      done: false
    };
    this.setState({ Data: [...addedData, addition] });
  };

  handleRemove = item => {
    const newData = this.state.Data;
    newData.splice(item.id, 1);
    this.setState({ Data: newData });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <AddMenu
          Data={this.state.Data}
          value={this.state.value}
          handleAdd={this.handleAdd}
        />
        <ItemList
          Data={this.state.Data}
          handleCheck={this.handleCheck}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
