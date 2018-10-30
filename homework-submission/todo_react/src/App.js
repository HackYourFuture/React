import React, { Component } from "react";
import "./App.css";
import Info from "./Info";
import data from "./data";
import TodoLists from "./TodoLists";
import ItemCreate from "./ItemCreate";

class App extends Component {
  state = {
    todos: data
  };

  handleClick = id => {
    const newTodos = this.state.todos.slice();

    newTodos.forEach(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
    });
    this.setState({ todos: newTodos });
  };

  render() {
    const listData = this.state.todos.map(item => (
      <TodoLists
        key={item.id}
        description={item.description}
        deadline={item.deadline}
        done={item.done}
        id={item.id}
        handleClick={this.handleClick}
      />
    ));

    if (listData.length === 0) {
      return (
        <div className="App">
          <h3>Ther are no To-do's today!</h3>
        </div>
      );
    }

    return (
      <div className="App">
        {/* <DateP /> */}
        <div>
          <ItemCreate />
        </div>

        {listData}

        <div>
          <Info />
        </div>
        {/* {console.log(new Date())} */}
      </div>
    );
  }
}

export default App;
