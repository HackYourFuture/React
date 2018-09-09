import { observable, action, configure } from "mobx";
import data from "./sources/data.json";

configure({ enforceActions: true });

class Store {
  @observable data = data;

  @action
  handler = e => {
    let todos = this.data;
    todos[e.target.id -1].done = !todos[e.target.id -1].done;
  }

  @action
  addTodo = e => {
    e.preventDefault();
    const newTodo = {
      id: this.data.length + 1,
      description: e.target.description.value,
      deadline: e.target.deadline.value,
      done: false
    };
    this.data.push(newTodo)
    e.target.description.value = "";
    e.target.deadline.value = "";
  }

  @action
  removeTodo = (i) => {
    this.data.splice(i, 1);
  }
}
export default new Store();