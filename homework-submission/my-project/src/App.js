import React, { Component } from 'react';
import './App.css';
import TodoItem from "./TodoItem"

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoItem
          description="Get out of bed,"
          deadlineDate="Wed Sep 13 2017"
        />
        <TodoItem
          description="Brush teeth,"
          deadlineDate="Thu Sep 14 2017"
        />
        <TodoItem
          description="Eat breakfast,"
          deadlineDate="Fri Sep 15 2017"
        />
      </div>
    );
  }
}

export default App;
