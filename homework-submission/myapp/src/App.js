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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <AddMenu Data={this.Data} value={this.value} />
        <ItemList Data={this.Data}/>
      </div>
    );
  }
}

export default App;
