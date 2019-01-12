import React, { Component } from "react";
import "./App.css";
import Item from "./Item.js";
import ItemData from "./ItemData.js";
import Header from "./Header";

class App extends Component {
  render() {
    const Data = ItemData.map((Data, Key) => (
      <Item text={Data.text} deadline={Data.deadline} Key={Key} />
    ));
    return (
      <div className="App">
        <Header />
        <ul>{Data}</ul>
      </div>
    );
  }
}

export default App;
