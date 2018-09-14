import { observable, action, configure } from "mobx";
import uuid from "uuid/v4";

import todosJSON from "../Sources/todosJSON.json";

configure({ enforceActions: "observed" });

const TODO_TEMPLATE = {
  description: "",
  deadline: null,
  id: null,
  done: false
};

class TodoStore {
  @observable
  todos = [...todosJSON];

  @observable
  updatedTodo = { ...TODO_TEMPLATE };

  @observable
  newTodo = { ...TODO_TEMPLATE };

  @action
  handleToggleCheck = itemID => {
    let todos = [...this.todos];
    todos = todos.map(todo => {
      if (todo.id !== itemID) return todo;
      return { ...todo, done: !todo.done };
    });

    return (this.todos = todos);
  };

  @action
  handleNewDescription = e => {
    const newTodo = { ...this.newTodo };
    newTodo.description = e.target.value;

    return (this.newTodo = newTodo);
  };

  @action
  handleNewDeadline = e => {
    let newTodo = { ...this.newTodo };
    newTodo.deadline = e.target.value;

    return (this.newTodo = newTodo);
  };

  @action
  handleSubmit = e => {
    e.preventDefault();
    let newTodo = { ...this.newTodo };
    if (!newTodo.description || !newTodo.deadline) return;

    newTodo = { ...newTodo, id: newTodo.id || uuid() };
    const todos = [...this.todos, newTodo];
    newTodo = TODO_TEMPLATE;

    return [(this.todos = todos), (this.newTodo = newTodo)];
  };

  @action
  handleRemove = itemID => {
    const { todos } = this;
    const newTodos = todos.filter(todo => todo.id !== itemID);

    return (this.todos = newTodos);
  };

  @action
  handleEdit = itemID => {
    const todos = [...this.todos];
    const updatedTodo = todos.find(todo => todo.id === itemID);

    return (this.updatedTodo = updatedTodo);
  };

  @action
  handleCancel = () => {
    const updatedTodo = { ...TODO_TEMPLATE };

    return (this.updatedTodo = updatedTodo);
  };

  @action
  handleUpdateDescription = e => {
    const updatedTodo = { ...this.updatedTodo };
    updatedTodo.description = e.target.value;

    this.updatedTodo = updatedTodo;
  };

  @action
  handleUpdateDeadline = e => {
    const updatedTodo = { ...this.updatedTodo };
    updatedTodo.deadline = e.target.value;

    this.updatedTodo = updatedTodo;
  };

  @action
  handleUpdate = itemID => {
    const todos = [...this.todos];
    let updatedTodo = { ...this.updatedTodo };

    const updatedTodos = todos.map(todo => {
      if (todo.id !== itemID) return todo;
      return (todo = { ...updatedTodo });
    });

    updatedTodo = { ...TODO_TEMPLATE };

    return [(this.todos = updatedTodos), (this.updatedTodo = updatedTodo)];
  };
}

const Store = new TodoStore();
export default Store;
