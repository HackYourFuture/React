import { observable, computed, action, runInAction } from "mobx";

import { configure } from "mobx";
configure({ enforceActions: "observed" });

const API_Base = "https://hyf-react-api.herokuapp.com";

class TodosStore {
  @observable
  edit = false;
  @observable
  Data = [];
  @observable
  state = "loading";

  @action
  handleCheck = async todoId => {
    this.state = "loading";
    const targetedTodo = this.Data.find(todo => todo._id === todoId);
    // this code block to show instant change to the user.
    const newData = this.Data.map(todo => {
      if (todo._id === todoId) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    this.Data = newData;
    this.state = "done";

    try {
      await this.patchRequest(todoId, { done: !targetedTodo.done });
    } catch (error) {
      runInAction(() => {
        this.state = "error";
      });
    }

    this.getTodos();
  };
  @action
  handleDelete = async todoId => {
    this.state = "loading";

    try {
      await this.deleteRequest(todoId);
      runInAction(() => {
        this.state = "done";
      });
    } catch (error) {
      runInAction(() => {
        this.state = "error";
      });
    }

    this.getTodos();
  };

  @action
  handleAddTodo = async (description, deadline) => {
    this.state = "loading";
    const newTodo = {
      description,
      deadline,
      done: "false"
    };
    try {
      await this.postRequest(newTodo);
      runInAction(() => {
        this.state = "done";
      });
    } catch (error) {
      runInAction(() => {
        this.state = "error";
      });
    }
    this.getTodos();
  };

  @action
  handleEdit = todoId => {
    const toEdit = this.Data.find(todo => todo._id === todoId);
    toEdit.edit = !this.edit;
  };
  @action
  cancelEdit = todoId => {
    const toCancel = this.Data.find(todo => todo._id === todoId);
    toCancel.edit = !toCancel.edit;
  };

  @action
  handleUpdate = async (todoId, description, deadline) => {
    this.state = "loading";

    let targetTodo = this.Data.find(todo => todo._id === todoId);
    const updatedTodo = {
      ...targetTodo,
      description: description || targetTodo.description,
      deadline: deadline || targetTodo.deadline
    };
    delete updatedTodo.edit;

    try {
      await this.patchRequest(todoId, updatedTodo);

      runInAction(() => {
        this.state = "done";
      });
    } catch (error) {
      runInAction(() => {
        this.state = "error";
      });
    }
    this.getTodos();
  };

  @action getTodos = async () => {
    this.Data = [];
    this.state = "loading";
    try {
      const API_TODOS = await this.fetchData();
      runInAction(() => {
        this.Data = API_TODOS;
        this.state = "done";
      });
    } catch (error) {
      runInAction(() => {
        this.state = "error";
      });
    }
  };
  fetchData = () => {
    return fetch(`${API_Base}/todos`)
      .then(this.handleErrors)
      .then(res => res.json());
  };
  deleteRequest(todoId) {
    return fetch(`${API_Base}/todos/${todoId}`, {
      method: "DELETE"
    }).then(this.handleErrors);
  }
  postRequest(data) {
    return fetch(`${API_Base}/todos/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(this.handleErrors);
  }
  patchRequest = (id, data) => {
    return fetch(`${API_Base}/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(this.handleErrors);
  };
  handleErrors(response) {
    if (!response.ok) throw response.statusText;
    return response;
  }

  @computed
  get remainingTodos() {
    const remaining = this.Data.filter(todo => {
      return !todo.done;
    }).length;
    return remaining;
  }
}

const store = new TodosStore();
export default store;
