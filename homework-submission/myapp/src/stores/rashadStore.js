import { configure, action, observable, runInAction, computed } from "mobx";
import Todos from "../components/todos.json";

configure({ enforceActions: true });

const url = "https://hyf-react-api.herokuapp.com";

class RashadStore {
  @observable todosList = [];

  fetchAll = () => {
    fetch(`${url}/todos`)
      .then(response => response.json())
      .then(todosList => {
        console.log(todosList);
        runInAction(() => {
          this.todosList = Todos;
        });
      })
      .catch(err => console.log(err));
  };

  @action
  checker = item => {
    item.done = !item.done;
    fetch(`${url}/todos/${item._id}`, {
      method: "PATCH",
      body: JSON.stringify({ done: item.done }),
      headers: { "content-type": "application/json" }
    })
      .then(response => response.json())
      .then(todo => {
        const newTodos = this.todosList.map(element => {
          if (todo._id === element._id) {
            return { ...element, done: !element.done };
          }
          return element;
        });
        runInAction(() => {
          this.todosList = newTodos;
        });
      })
      .catch(err => console.log(err));
  };

  @action
  remover = item => {
    fetch(`${url}/todos/${item._id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" }
    })
      .then(response => response.json())
      .then(todo => {
        const newTodos = this.todosList.filter(
          element => element._id !== todo._id
        );
        runInAction(() => {
          this.todosList = newTodos;
        });
      })
      .catch(err => console.log(err));
  };

  @action
  submitHandler = e => {
    e.preventDefault();
    const newTodo = {
      id: this.todosList.length + 1,
      description: e.target.description.value,
      deadline: new Date(e.target.deadline.value),
      done: false
    };
    fetch(`${url}/todos/create`, {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: { "content-type": "application/json" }
    })
      .then(response => response.json())
      .then(item =>
        runInAction(() => {
          this.todosList = [...this.todosList, item];
        })
      )
      .catch(err => console.log(err));
  };

  @computed
  get count() {
    return this.todosList.length;
  }
}

export default new RashadStore();
