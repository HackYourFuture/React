import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'
import Title from './Title';

const todo = [
  {
    key: 1,
    description: 'Get out of bed',
    deadline: 'Wed Sep 13 2017'
  },
  {
    key: 2,
    description: 'Brush teeth',
    deadline: 'Thu Sep 14 2017'
  },
  {
    key: 3,
    description: 'Eat breakfast',
    deadline: 'Fri Sep 15 2017'
  }
]
class App extends Component {
  render() {
    const todos = todo.map((item) => (<Todo key={item.key} description={item.description} deadline={item.deadline} />));
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Title title="Todo List " />
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}
export default App;
