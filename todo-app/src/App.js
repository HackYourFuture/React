import React, { Component } from 'react';
import './index.css';
import ListItems from "./List-Items";

class App extends Component {

  render() {
    
    return (
      <div id="main">
        <h2>To-do list</h2>
        <ListItems />
      </div>
    );
  }
}

export default App;
