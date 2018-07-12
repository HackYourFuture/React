import React, { Component } from "react";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import "./App.css";
import { observer, inject } from "mobx-react";

@inject("todoListStore")
@observer
class App extends Component {
  render() {
    const { listItems } = this.props.todoListStore;
    let renderList;
    if (listItems.length > 0) {
      renderList = listItems.map((todo, index) => {
        return <TodoItem key={index} index={index} todo={todo} />;
      });
    } else {
      renderList = <p> No items... </p>;
    }
    return (
      <div className="container">
        <h1>Todos List</h1>
        <Form />
        {renderList}
      </div>
    );
  }
}

export default App;