import { observable, computed, action, runInAction, configure } from "mobx";

configure({
  enforceActions: 'strict'
})

class todoStore {
  @observable todos = {
    data: [],
    status: "loading",
    done: false
  };

  getTodosFunc() {
    return fetch("https://hyf-react-api.herokuapp.com/todos").then(response =>
      response.json()
    );
  }

  @action getTodos() {
    this.todos.data = [];
    this.getTodos.status = "loading";
    this.getTodosFunc()
      .then(todos => {
        runInAction(() => {
          this.todos.data = todos;
          this.todos.status = "done";
        });
      })
      .catch(error => {
        runInAction(() => {
          this.todos.status = "error";
        });
      });
  }

  @computed get numbersOfTodos() {
    return this.todos.data.length;
  }

  addNewPost(newPost) {
    return fetch("https://hyf-react-api.herokuapp.com/todos/create", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .catch(error => {
        runInAction(() => {
          this.todos.status = "error";
        });
      });
  }

  @action handleAdd = (description, deadline) => {
    this.handleAdd.status = "loading";

    const uniqueId = () => {
      return (
        "id-" +
        Math.random()
          .toString(36)
          .substr(2, 16)
      );
    };

    const newTodo = {
      id: uniqueId(),
      description: description,
      deadline: deadline,
      __v: 1,
      done: false
    };

    this.addNewPost(newTodo)
      .then(newTodo => {
        runInAction(() => {
          this.todos.data = [...this.todos.data, newTodo];
          this.todos.status = "done";
        });
      })
      .catch(error => {
        runInAction(() => {
          this.todos.status = "error";
        });
      });
  };

  deletePost(id) {
    return fetch("https://hyf-react-api.herokuapp.com/todos/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .catch(error => {
        runInAction(() => {
          this.todos.status = "error";
        });
      });
  }

  @action handleRemove = id => {
    this.handleRemove.status = "loading";
    this.deletePost(id)
      .then(id => {
        runInAction(() => {
          function filterByID(item) {
            if (item._id !== id) {
              return true;
            }
            return false;
          }
          this.todos.data = this.todos.data.filter(filterByID);
          this.todos.status = "done";
        });
      })
      .catch(error => {
        runInAction(() => {
          this.todos.status = "error";
        });
      });
  };

  @action handleCheckBox = id => {
    this.handleCheckBox.status = "loading";
    this.updatePost(id)
      .then(id => {
        runInAction(() => {
          this.todos.data = this.todos.data.map(item => {
            if (item._id === id) {
              return { ...item, done: !item.done };
            }
            return item;
          });
          this.todos.status = "done";
        });
      })
      .catch(error => {
        runInAction(() => {
          this.todos.status = "error";
        });
      });
  };

  updatePost(id, data) {
    return fetch("https://hyf-react-api.herokuapp.com/todos/" + id, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .catch(error => {
        runInAction(() => {
          this.todos.status = "error";
        });
      });
  }
}
const store = new todoStore();
export default store;
