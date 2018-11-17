import { observable, action, computed } from "mobx";
// import moment from "moment";

class TodoStore {
  @observable todos = [];
  @observable editing = false;

  @action addTodo = todo => {
    if (todo.description.length !== 0 && todo.deadline.length !== 0)
      this.todos.push(todo);
  };
  @action onCheck = (e, id) => {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        todo.done = e.target.checked;
      }
      return todo;
    });
  };
  @action updateTodo = (id, description, deadline) => {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        todo.description = description;
        todo.deadline = deadline;
      }
      return todo;
    });
  };
  @action removeTodo = (e, id) => {
    this.todos = this.todos.filter(todo => todo.id !== id);
  };

  @computed get todoCount() {
    const notDoneTodos = this.todos.filter(todo => !todo.done);
    return notDoneTodos.length;
  }
}

const store = new TodoStore();
export default store;
