import React, { Component } from "react";
import "./App.css";
import todoList from "./components/todo.json";
import Description from "./components/Description";

export class App extends Component {
  state = {
    todoList
  };

  clickHandler = e => {
    const tempArr = this.state.todoList.slice();

    console.log(e.target.id);

    tempArr[e.target.id - 1].done = !tempArr[e.target.id - 1].done;

    this.setState({
      todoList: tempArr
    });
  };

  render() {
    let renderList;
    if (todoList.length) {
      renderList = todoList.map(todo => {
        return (
          <div key={todo.id}>
            <input
              type="checkbox"
              defaultChecked={todo.done}
              id={todo.id}
              onClick={e => this.clickHandler(e)}
            />
            <label
              htmlFor={todo.id}
              style={{ textDecoration: todo.done ? "line-through" : "" }}
            >
              <Description
                description={todo.description}
                deadline={todo.deadline}
              />
            </label>
          </div>
        );
      });
    } else {
      renderList = <p> No items... </p>;
    }
    return (
      <div className="container">
        <h1>To Do List</h1>
        {renderList}
      </div>
    );
  }
}
