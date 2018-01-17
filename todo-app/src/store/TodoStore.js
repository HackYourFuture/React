import { observable, action, autorun } from "mobx";

import { loadTodos, setTodos } from "../storage/storage";

export default class TodoStore {
  someFunc = autorun(() => {
    console.log(this.todos);
  });

  @observable todos = loadTodos();

  @observable isEditing = null;

  @action
  handleToggleEditOnItem = (id, cancel) => {
    if (cancel) {
      this.isEditing = null;
      return;
    }
    this.isEditing = id;
    // const item = this.todos.find(item => item.id === id);
    // this.valuesOnUpdateToggle.toBeUpdatedItem = item.text;
    // this.valuesOnUpdateToggle.toBeUpdatedDeadline = item.deadline;
  };

  @action //done
  handleRemove = id => {
    this.todos = this.todos.filter(todo => todo.id !== id);
    setTodos(this.todos);
  };

  @action //done
  addTodoItem = (text, deadline) => {
    const allIds = this.todos.map(item => item.id);
    const newTodo = {
      id: Math.max(...allIds) + 1,
      text,
      deadline,
      done: false
    };

    this.todos.push(newTodo);
    setTodos(this.todos);
  };

  @action
  handleToggleDone = id => {
    const newTodos = this.todos.map(item => {
      if (item.id === id) {
        item.done = item.done ? false : true;
      }
      return item;
    });
    this.todos = newTodos;
    console.log(this.todos[0].done);
    console.log({ ...this.todos[0] });
    setTodos(this.todos);
    // const index = this.todos.findIndex(item => item.id === id);
    // this.todos[index].done = this.todos[index].done ? false : true;
    // this.todos[index].text = "bla";
    // console.log(this.todos[index].done);
  };

  @action
  handleUpdateItem = (id, text, deadline) => {
    this.todos.map(item => {
      if (item.id === id) {
        item.text = text;
        item.deadline = deadline;
      }
      return item;
    });
    setTodos(this.todos);
  };
}
