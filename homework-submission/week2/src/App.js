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
    const item = this.state.data
    const index = item.findIndex(x => x.id === id);
    item[index].done = !item[index].done
    this.setState({ item })
  };


  render() {
    return (
      <div className="App">
        <Title title="Todo List" />
        <TodoList data={this.state.data} handler={this.checkBoxHandler} />
      </div>
    );
  }
}

export default App;