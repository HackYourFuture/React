import { observable, action, configure } from "mobx";
import data from "./sources/data.json";

configure({ enforceActions: true });

class Store {
  @observable data = data;

  @action
  handler = e => {
    let todos = this.state.data;
    todos[e.target.id -1].done = !todos[e.target.id -1].done;
    this.setState({
      todos
    })
  }

  @action
  addTodo = e => {
    e.preventDefault();
    const {data} = this.state;
    const newTodo = {
      id: data.length + 1,
      description: e.target.description.value,
      deadline: e.target.deadline.value,
      done: false
    };
    data.push(newTodo)
    this.setState({
      data
    })
    e.target.description.value = "";
    e.target.deadline.value = "";
  }

  @action
  removeTodo = (i) => {
    this.state.data.splice(i, 1);
    console.log(i)
    this.setState({
      data: this.state.data
    })
  }

}

export default new Store;