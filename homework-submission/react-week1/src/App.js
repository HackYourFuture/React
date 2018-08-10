import React, { Component } from "react";

import Header from "./Header";
import Todo from "./Todo";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ul>
          <Todo />
        </ul>
      </div>
    );
  }
}

export default App;
