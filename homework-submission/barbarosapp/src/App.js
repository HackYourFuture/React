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

  handleRemove = id => {
    function filterByID(item) {
      if (item.id !== id) {
        return true;
      }
      return false; 
    }

    const deletedData = this.state.Data.filter(filterByID);
    this.setState({ Data: deletedData });
  };

  handleAdd = (name, deadline) => {
    const newId = this.state.Data.length;
    const newData = this.state.Data;
    const addition = {
      id: newId,
      name,
      deadline,
      done: false
    };
    this.setState({ Data: [...newData, addition] });
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
          handleChangeData={this.handleChangeData}
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
