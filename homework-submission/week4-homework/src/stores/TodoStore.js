import { observable, action, computed } from "mobx";
import todos from "../source/todos.json";
import { configure } from "mobx";
import uuidv4 from "uuid/v4";
configure({ enforceActions: "observed" });

class TodoClass {
  @observable
  todos = todos;

  @action
  toggleDone = id => {
    let todoItems = this.todos.map(todo => {
      if (id === todo.id) {
        return {
          ...todo,
          done: !todo.done
        };
      }
      return todo;
    });
    this.todos = todoItems;
  };

  @action
  AddTodo = newTodo => {
    let todoItems = this.todos.slice();
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
    const todoItems = this.todos.map(todo => {
      if (todo.description === oldTodo) {
        return {
          ...todo,
          description: newTodo
        };
      }
      return todo;
    });
    this.todos = todoItems;
  };

  @computed
  get todoCount() {
    return this.todos.length;
  }
}

let TodoStore = new TodoClass();

export default TodoStore;
