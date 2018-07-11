import { observable, action, computed, configure } from "mobx";
import Todos from "../components/todos.json";

configure({ enforceActions: true });

class RashadStore {
  @observable todos = Todos;

  @action
  checker = item => {
    item.done = !item.done;
  };

  @action
  remover = item => {
    const remove = this.todos.filter(elem => elem !== item);
    this.todos = remove;
  };

  @action
  submitHandler = e => {
    e.preventDefault();
    const newTodo = {
      id: this.todos.length + 1,
      description: e.target.description.value,
      deadline: e.target.deadline.value,
      done: false
    };
    this.todos.push(newTodo);
  };

  @computed
  get count() {
    return this.todos.length;
  }
}

export default new RashadStore();
