import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Calender from "./Components/Calender";
import { inject, observer } from 'mobx-react';


@inject("TodosStore")
@observer
class App extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const descriptionInput = this.descriptionInput.value;
    const deadlineInput = this.deadlineInput.value;

    this.props.TodosStore.addTodo({
      id: this.props.Todos + 1,
      description: descriptionInput,
      deadline: deadlineInput,
      done: false
    });
    this.descriptionInput.value = "";
    this.deadlineInput.value = "";
  };

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
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter Description : <input placeholder="Type a description..." type="text" ref={input => (this.descriptionInput = input)} />{" "}
            </label>
            <label>
              Deadline <input type="date" ref={input => (this.deadlineInput = input)} />
            </label>
            <input type="submit" value="Add" className="add" />
          </form>

          <div className="items">{this.renderTodos()}</div>
        </div>
        <Calender />
      </div>;
  }
}

export default App;