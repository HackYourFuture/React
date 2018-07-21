import { observable, action, configure } from "mobx";

const TodosApiUrl = "https://hyf-react-api.herokuapp.com";

configure({ enforceActions: true });
class TodoStore {
  @observable todos = [];

  @action
  getTodos() {
    fetch(`${TodosApiUrl}/todos`)
      .then(response => response.json())
      .then(data => this.setTodos(data));
  }

  @action
  setTodos(todos) {
    this.todos = todos.map(todo => ({
      ...todo,
      id: todo._id
    }));
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
const todoStore = new TodoStore();
todoStore.getTodos();

export default todoStore;
