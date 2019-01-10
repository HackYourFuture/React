import React, { Component } from 'react';
import './App.css';
import TodoItem from "./TodoItem"
import Data from './Data';

class App extends Component {
  render() {
    const newData = Data.map(item => <TodoItem description={item.description} deadlineDate={item.deadlineDate} />)
    return (
      <div className="App">
        {newData}
      </div>
    );
  }
}

export default App;
