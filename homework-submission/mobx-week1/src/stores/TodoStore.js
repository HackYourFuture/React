import { observable, action, computed, runInAction } from "mobx";

class TodoStore {
  @observable todos = {
    data: [],
    status: "loading..."
  };

  @action listTodos() {
    this.todos.data = [];
    this.todos.status = "loading...";
    this.getTodos()
      .then(todos => {
        runInAction(() => {
          this.todos.data = todos;
          this.todos.status = "done";
        });
      })
      .catch(err => (this.todos.status = "error"));
  }
  @action createTodo(todo) {
    this.todos.status = "loading...";
    this.postTodos(todo)
      .then(() => {
        runInAction(() => {
          this.todos.data.push(todo);
          this.todos.status = "done";
        });
      })
      .catch(err => (this.todos.status = "error"));
  }
  @action onCheck(id) {
    this.todos.status = "loading...";
    const Todo = this.todos.data.find(todo => todo._id === id);
    this.checkedTodo(id, { done: !Todo.done })
      .then(() => {
        runInAction(() => {
          this.todos.data.map(todo => {
            if (todo._id === id) {
              todo.done = !todo.done;
            }
            return todo;
          });
          this.todos.status = "done";
        });
      })
      .catch(err => (this.todos.status = "error"));
  }

  @action updateTodo(id, description, deadline) {
    this.todos.status = "loading...";
    this.patchTodo(id, description, deadline)
      .then(() => {
        runInAction(() => {
          this.todos.data.map(todo => {
            if (todo._id === id) {
              todo.description = description;
              todo.deadline = deadline;
            }
            return todo;
          });
          this.todos.status = "done";
        });
      })
      .catch(err => (this.todos.status = "error"));
  }

  @computed get todoCount() {
    const notDoneTodos = this.todos.data.filter(todo => !todo.done);
    return notDoneTodos.length;
  }

  getTodos() {
    return fetch("https://hyf-react-api.herokuapp.com/todos").then(response =>
      response.json()
    );
  }
  postTodos(todo) {
    return fetch("https://hyf-react-api.herokuapp.com/todos/create", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }
  patchTodo(id, description, deadline) {
    return fetch(`https://hyf-react-api.herokuapp.com/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ description, deadline }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }
  checkedTodo(id, newTodo) {
    return fetch(`https://hyf-react-api.herokuapp.com/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }
}

const store = new TodoStore();
export default store;
