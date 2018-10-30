import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
import ItemList from "./components/itemList";
import Data from "./components/data/data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Data };
  }

  handleCheck = id => {
    const newData = this.state.Data.map(item => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    this.setState({ Data: newData });
    console.log(Data);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <ItemList Data={this.state.Data} handleCheck={this.handleCheck} />
      </div>
    );
  }
}

export default App;
