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
    console.log(allIds);
    const newTodo = {
      id: allIds.length === 0 ? 0 : Math.max(...allIds) + 1,
      text,
      deadline,
      done: false
    };
    console.log(newTodo.id);
    this.todos.push(newTodo);
    setTodos(this.todos);
  };

  @action
  handleToggleDone = id => {
    this.todos.map(item => {
      if (item.id === id) {
        item.done = item.done ? false : true;
      }
      return item;
    });
    setTodos(this.todos);
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
