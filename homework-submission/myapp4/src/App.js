import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import TodosCounter from "./Components/TodosCounter";
import { inject, observer } from 'mobx-react';
import Form from './Components/Form';


@inject("TodosStore")
@observer
class App extends Component {
  
  deleteTodo = id => {
    this.props.TodosStore.removeTodo(id);
  };

  isTaskDone = todo => {
    this.props.TodosStore.isDone(todo);
  };

  renderTodos = () => {
    if (this.props.TodosStore.Todos.length === 0)
      return <p className="noItems">No items...</p>;

    const textStyle = {
      textDecoration: "line-through",
      backgroundColor: "#0455d8"
    };

    return (
      <ul>
        {this.props.TodosStore.Todos.map((todo, id) => {
          return (
            <li key={id}>
              <input
                checked={todo.done}
                type="checkbox"
                onChange={() => this.isTaskDone(todo)}
              />
              <span style={todo.done ? textStyle : null}>
                {todo.description} , {todo.deadline}
              </span>
              <button onClick={event => this.deleteTodo(id)} className="remove">
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return <div className="App">
      
      <Header />

      <div className="data">
        
        <Form />
        <div className="items">{this.renderTodos()}</div>
        
      </div>

      <TodosCounter />

    </div>;
  }
}

export default App;
