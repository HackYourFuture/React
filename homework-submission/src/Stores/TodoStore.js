import { observable, action, configure, toJS } from "mobx";
import uuid from "uuid/v4";

import todosJSON from "../Sources/todosJSON.json";

configure({ enforceActions: "observed" });

const TODO_TEMPLATE = {
  description: "",
  deadline: "",
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
    this.todos = this.todos.map(todo => {
      if (todo.id !== itemID) return todo;
      return { ...todo, done: !todo.done };
    });
  };

  @action
  handleNewDescription = e => {
    this.newTodo = { ...this.newTodo, description: e.target.value };
  };

  @action
  handleNewDeadline = e => {
    this.newTodo = { ...this.newTodo, deadline: e.target.value };
  };

  @action
  handleSubmit = e => {
    e.preventDefault();
    if (!this.newTodo.description || !this.newTodo.deadline) return;

    this.newTodo = { ...this.newTodo, id: this.newTodo.id || uuid() };
    this.todos = [...this.todos, this.newTodo];
    this.newTodo = TODO_TEMPLATE;
  };

  @action
  handleRemove = itemID => {
    this.todos = this.todos.filter(todo => todo.id !== itemID);
  };

  @action
  handleEdit = itemID => {
    this.updatedTodo = this.todos.find(todo => todo.id === itemID);
  };

  @action
  handleCancel = () => {
    this.updatedTodo = { ...TODO_TEMPLATE };
  };

  @action
  handleUpdateDescription = e => {
    this.updatedTodo = { ...this.updatedTodo, description: e.target.value };
  };

  @action
  handleUpdateDeadline = e => {
    this.updatedTodo = { ...this.updatedTodo, deadline: e.target.value };
  };

  @action
  handleUpdate = itemID => {
    this.todos = this.todos.map(todo => {
      if (todo.id !== itemID) return todo;
      return (todo = { ...this.updatedTodo });
    });

    this.updatedTodo = { ...TODO_TEMPLATE };
  };
}

const Store = new TodoStore();
export default Store;
