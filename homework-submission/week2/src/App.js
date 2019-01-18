import React, { Component } from 'react';
import './App.css';
import './index.css'
import TodoList from './TodoList'
import Title from './Title';
import data from './data.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    }
  }
  checkBoxHandler = (id) => {
    this.setState(prevState => {
      return {
        items: prevState.data.map((item) => {
          if (item.id === id) { item.done = !item.done }
          return item
        })
      }
    })
  };

  render() {
    return (
      <div className="App">
        <Title title="Todo List" />
        <div>
          <TodoList data={this.state.data} handler={this.checkBoxHandler} />
        </div>
      </div>
    );
  }
}

export default App;