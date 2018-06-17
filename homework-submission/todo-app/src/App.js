import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import ListItems from "./components/listItems";
import Photo from "./components/photo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ListItems />
        <Photo />
      </div>
    );
  }
}

export default App;
