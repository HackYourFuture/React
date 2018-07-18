import { observable, action, computed, configure, runInAction } from "mobx";

configure({ enforceActions: true })
const URL = "https://hyf-react-api.herokuapp.com";
class TodoListStore {

  @observable
  TODOListItems = [];

  fetchAll = () => {
    fetch(`${URL}/todos`)
      .then(response => response.json())
      .then(todos => {
        runInAction(() => {
          this.TODOListItems = todos;
        })
      })
      .catch(err => console.log(err));
  }

  @action
  checkStatus = (item) => {
     fetch(`${URL}/todos/${item._id}`, {
      method: "PATCH",
      body: JSON.stringify({ done: item.done }),
      headers: { 'content-type': 'application/json', }
    })
    .then(response => response.json())
      .then(todo => {
        const newTodoItems = this.TODOListItems.map((element) => {
      if (todo._id === element._id) {
        return {
          ...element,
          done: !element.done
        }
      }
      return element;
    });
    runInAction(() => { this.TODOListItems = newTodoItems; });
      })
      .catch(err => console.log(err));
  }

  @action
  removeTodoItem = (item) => {
    fetch(`${URL}/todos/${item._id}`, {
      method: "DELETE",
      headers: { 'content-type': 'application/json' }
    })
      .then(response => response.json())
      .then(todo => {
        const newTodoItems = this.TODOListItems.filter((element) => element._id !== todo._id);
        runInAction(() => { this.TODOListItems = newTodoItems; })
      })
      .catch(err => console.log(err));
  }

  @action
  addTodoItem = (e) => {
    e.preventDefault();
    const newTodo = {
      "id": this.TODOListItems.length + 1,
      "description": e.target.description.value,
      "deadline": e.target.deadline.value,
      "done": false
    };
    fetch(`${URL}/todos/create`, {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: { 'content-type': 'application/json' }
    })
      .then(response => response.json())
      .then(item =>
        runInAction(() => { this.TODOListItems = [...this.TODOListItems, item] }))
      .catch(err => console.log(err));
  }


  @computed get todosCounter() {
    return this.TODOListItems.length;
  }
}
const TodoListInstance = new TodoListStore();
export default TodoListInstance;
