import React, { Component } from "react";
import "./App.css";
import todoList from "./data/todos.json";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";

class App extends Component {
  state = {
    todoList
  };

  onCheckboxChange = index => {
    console.log(index);
    if (index >= 0) {
      todoList[index].done = !todoList[index].done;
    }

    this.setState({
      todoList
    });
  };

  onSubmitForm = event => {
    event.preventDefault();

    let id = 0;
    if (todoList.length > 0) {
      id = todoList[todoList.length - 1].id + 1;
    }

    let deadline = event.target.deadline.value;
    let description = event.target.description.value;

    let match = deadline.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
    if (match && description.length > 0) {
      let newTodo = {
        id: id,
        description: description,
        deadline: deadline,
        done: false
      };
      todoList.push(newTodo);

      this.setState({
        todoList
      });
    } else {
      alert(
        "The deadline should be in this format DD-MM-YYYY \n And the Todo must be at least 1 character"
      );
    }
  };
  onRemoveItemButton = (index, event) => {
    event.preventDefault();
    todoList.splice(index, 1);

    this.setState({
      todoList
    });
  };

  render() {
    let renderList;
    if (todoList.length > 0) {
      renderList = todoList.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            removeButtonHandler={this.onRemoveItemButton}
            checkBoxHandler={this.onCheckboxChange}
            index={index}
            todo={todo}
          />
        );
      });
    } else {
      renderList = <p> No items... </p>;
    }
    return (
      <div className="container">
        <h1>Todos List</h1>
        <Form submitForm={this.onSubmitForm} />
        {renderList}
      </div>
    );
  }
}

export default App;
