import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Tasks from './components/Tasks';





class App extends Component {

  state = {

   todos: [
      {
        "id": 1,
        "description": "Get out of bed",
        "deadline": "2017-09-11",
        "done": true
      },
      {
        "id": 2,
        "description": "Brush teeth",
        "deadline": "2017-09-10",
        "done": false
      },
      {
        "id": 3,
        "description": "Eat breakfast",
        "deadline": "2017-09-09",
        "done": false
      }
    ]


  }
  handleClick = (id) => {
  
    const todos = this.state.todos;
    todos[id].done = !todos[id].done;
    this.setState({ todos });


}
  
  
  render() {
    return (
      <div className="App">
        <List />   
        {this.state.todos.map((todo, id) => {

          return (
            <Tasks
              key={id}
              id={id}
              description={todo.description}
              deadline={todo.deadline}
              done={todo.done}
              handleClick={this.handleClick}
            />
          )

          })}
      
      </div>
    );
  }
}

export default App;
