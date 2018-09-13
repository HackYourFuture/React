import { configure, observable, action, computed, runInAction } from "mobx";
import uuidv4 from "uuid/v4";
const url = "https://hyf-react-api.herokuapp.com";

configure({ enforceActions: "observed" });
class TodoClass {
  @observable
  todos = [];
  @observable
  state = "Loading";

  @action
  async getTodos() {
    this.state = "Loading";
    this.todos = [];
    try {
      let todos = await this.getData();
      runInAction(() => {
        this.state = "Done";
        this.todos = todos;
      });
    } catch (error) {
      runInAction(() => {
        this.state = "error";
      });
    }
  }

  @action
  toggleDone = async id => {
    let todoItem = this.todos.find(todo => todo._id === id);
    try {
      await this.handleFetch(`${url}/todos/${id}`, "PATCH", {
        done: !todoItem.done
      });
      runInAction(() => {
        let todoItems = this.todos.map(todo => {
          if (id === todo._id) {
            return {
              ...todo,
              done: !todo.done
            };
          }
          return todo;
        });
        this.todos = todoItems;
      });
    } catch (error) {
      runInAction(() => {
        this.state = "Error";
      });
    }
  };

  @action
  addTodo = async newTodo => {
    let todoItem = {
      id: uuidv4(),
      description: newTodo,
      deadline: Date.now(),
      done: false
    };
    this.state = "Loading";
    try {
      let newItem = await this.handleFetch(
        `${url}/todos/create`,
        "POST",
        todoItem
      );
      runInAction(() => {
        this.todos = [...this.todos, newItem];
        this.state = "Done";
      });
    } catch (error) {
      runInAction(() => {
        this.state = "Error";
      });
    }
  };
  @action
  deleteTodo = async id => {
    this.state = "Loading";
    try {
      await this.handleFetch(`${url}/todos/${id}`, "DELETE");
      runInAction(() => {
        this.todos = this.todos.filter(todo => todo._id !== id);
        this.state = "Done";
      });
    } catch (error) {
      runInAction(() => {
        this.state = "Error";
      });
    }
  };
  @action
  updateTodo = async (id, newTodo) => {
    this.state = "Loading";
    try {
      await this.handleFetch(`${url}/todos/${id}`, "PATCH", {
        description: newTodo
      });
      runInAction(() => {
        let todoItems = this.todos.map(todo => {
          if (id === todo._id) {
            return {
              ...todo,
              description: newTodo
            };
          }
          return todo;
        });
        this.todos = todoItems;
        this.state = "Done";
      });
    } catch (error) {
      runInAction(() => {
        this.state = "Error";
      });
    }
  };
  @computed
  get todoCount() {
    return this.todos.length;
  }

  getData() {
    return fetch(`${url}/todos`)
      .then(this.handleErrors)
      .then(response => response.json());
  }

  handleFetch(address, method, data) {
    return fetch(address, {
      method,
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" }
    })
      .then(this.handleErrors)
      .then(response => response.json());
  }

  handleErrors(response) {
    if (!response.ok) throw Error(response.statusText);
    return response;
  }
}
let TodoStore = new TodoClass();
export default TodoStore;
