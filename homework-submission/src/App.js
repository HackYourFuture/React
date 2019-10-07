import React from 'react';
import './App.css';
import { Todos, StaticTodos } from './components/Todos';

class App extends React.Component {
  // Dynamic List

  state = {
    todos: [
      {
        id: 1,
        description: 'Get out of bed',
        deadline: '2017-09-11',
        done: false,
      },
      {
        id: 2,
        description: 'Brush teeth',
        deadline: '2017-09-10',
        done: false,
      },
      {
        id: 3,
        description: 'Eat breakfast',
        deadline: '2017-09-09',
        done: false,
      },
    ],
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Static list: </h2>
        <ul>
          <StaticTodos description="Get out of bed" deadline="Wed Sep 13 2017" />
          <StaticTodos description="Brush teeth" deadline="Wed Sep 13 2017" />
          <StaticTodos description="Brush teeth" deadline="Wed Sep 13 2017" />
        </ul>
        <h2>Dynamic List:</h2>
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
