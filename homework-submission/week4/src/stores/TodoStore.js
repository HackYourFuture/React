import { observable, action, configure } from "mobx";
import todos from "../todos";
configure({ enforceActions: true });
class TodoStore {
  @observable todos = todos;

  @action
  setTodos(todos) {
    this.todos = todos;
  }

  @action
  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  @action
  addTodo(newTodo) {
    this.todos = this.todos.concat(newTodo);
  }

  @action
  toggleTodo(id) {
    this.todos = this.todos.map(todo => {
      if (todo.id === Number(id)) {
        todo.done = !todo.done;
      }
      return todo;
    });
  }
}

export default new TodoStore();
