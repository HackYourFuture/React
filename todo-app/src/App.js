import React from "react";
import { Provider } from "mobx-react";

import TodoList from "./Components/TodoList";
import { todoStore } from "./store";
import AddTodoItem from "./Components/AddTodoItem";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <Provider todoStore={todoStore}>
        <div>
          <h1 className="pageHeader">TODO LIST</h1>
          <AddTodoItem />
          <TodoList />
        </div>
      </Provider>
    );
  }
}
