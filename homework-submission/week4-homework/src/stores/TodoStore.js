import { observable, action, computed } from "mobx";
import todos from "../source/todos.json";
import { configure } from "mobx";
configure({ enforceActions: true });

class TodoClass {
  @observable
  todos = todos;

  @action
  toggleDone = id => {
    let todoItems = this.todos.slice();
    let foundTodo = todoItems.find(todo => id === todo.id);
    foundTodo.done = !foundTodo.done;
    this.todos = todoItems;
  };
  @action
  AddTodo = newTodo => {
    let todoItems = this.todos.slice();
    const uuidv4 = require("uuid/v4");
    todoItems.push({
      id: uuidv4(),
      description: newTodo,
      done: false
    });
    this.todos = todoItems;
  };
  @action
  deleteTodo = id => {
    let todoItems = this.todos.filter(todo => todo.id !== id);
    this.todos = todoItems;
  };
  @action
  updateTodo = (oldTodo, newTodo) => {
    const foundTodo = this.todos.find(todo => todo.description === oldTodo);
    foundTodo.description = newTodo;
    this.todos = this.todos;
  };

  @computed
  get todoCount() {
    return this.todos.length;
  }
}

let TodoStore = new TodoClass();

export default TodoStore;
