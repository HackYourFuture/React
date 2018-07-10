import { observable, action, computed, configure } from "mobx";
import Data from "../TODOS.json";

configure({ enforceActions: true })
class TodoListStore {

  @observable
  TODOListItems = Data;

  @action
  checkStatus = (id) => {
    const newTodoItems = this.TODOListItems.map((element) => {
      if (id === element.id) {
        return {
          ...element,
          done: !element.done
        }
      }
      return element;
    });
    this.TODOListItems = newTodoItems;

  }

  @action
  removeTodoItem = (itemId) => {
    const newTodoItems = this.TODOListItems.filter((element) => element.id !== itemId);
    this.TODOListItems = newTodoItems;
  }

  @action
  addTodoItem = (e) => {
    e.preventDefault();
    const newTodo = {
      "id": this.TODOListItems.length + 1,
      "description": e.target.description.value,
      "deadline": e.target.deadline.value,
      "done": false
    }
    this.TODOListItems.push(newTodo);
  }


  @computed get todosCounter() {
    return this.TODOListItems.length;
  }
}
const TodoListInstance = new TodoListStore();
export default TodoListInstance;
