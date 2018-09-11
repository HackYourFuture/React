import { observable, action, configure} from "mobx";
import data from "./sources/data.json";

configure({ enforceActions: "observed" });

class Store {
  @observable data = data;

  @action
  toggleTodo = item => {
    let newData = [...this.data];
    item.done = !item.done;
    this.data = newData
  }

  @action
  addTodo = e => {
    e.preventDefault();
    let newData = [...this.data];
    const newTodo = {
      id: newData.length + 1,
      description: e.target.description.value,
      deadline: e.target.deadline.value,
      done: false
    };
    
    newData.push(newTodo)
    this.data = newData;
    e.target.description.value = "";
    e.target.deadline.value = "";
  }

  @action
  removeTodo = (i) => {
    let newData = [...this.data];
    newData.splice(i, 1);
    this.data = newData
  }
}
export default new Store();