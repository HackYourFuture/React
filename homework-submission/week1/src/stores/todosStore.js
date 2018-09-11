import { observable, action, configure, runInAction } from 'mobx';

configure({
  enforceActions: 'observed'
});

class TodosStore {

  @observable todos = [];
  @observable editing = -1;
  @observable state = 'loading';

  @action async checkBoxHandler(id) {
    this.state = 'loading';
    const ddone = !this.todos.find(item => item._id === id).done;
    try {
      await this.patchData(id, { ddone });
      runInAction(() => {
        const newTodos = this.todos.map(item => {
          if (item._id === id) {
            return {
              ...item,
              done: !item.done
            };
          }
          return item;
        });
        this.todos = newTodos;
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        console.log(error, error.message);
        this.state = 'error';
      });
    }
  }

  @action async deleteHandler(id) {
    this.state = 'loading';
    try {
      await this.deleteData(id);
      runInAction(() => {
        const result = this.todos.filter(item => item._id !== id);
        this.todos = result;
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  @action editHandler = (id) => {
    this.editing = id ? id : -1;
  }

  @action async updateHandler(id, description) {
    this.editing = -1;
    if (/^\s*$/.test(description))
      return;
    this.state = 'loading';
    try {
      await this.patchData(id, { description });
      runInAction(() => {
        const newTodos = this.todos.map(item => {
          if (item._id === id) {
            return {
              ...item,
              description: description
            };
          }
          return item;
        });
        this.todos = newTodos;
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  @action async addHandler(description, deadline) {
    const todo = {
      description,
      deadline,
      "done": "false"
    }
    this.state = 'loading';
    try {
      const addedTodo = await this.postData(todo);
      runInAction(() => {
        this.todos = this.todos = [...this.todos, addedTodo,];
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  @action async getTodos() {
    this.todos = [];
    this.state = 'loading';
    try {
      const data = await this.getData();
      runInAction(() => {
        this.todos = data;
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  getData() {
    return fetch('https://hyf-react-api.herokuapp.com/todos')
      .then(this.handleFetchErrors)
      .then(res => res.json());
  }

  postData(data) {
    return fetch('https://hyf-react-api.herokuapp.com/todos/create', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(this.handleFetchErrors)
      .then(res => res.json());
  }

  deleteData(id) {
    return fetch('https://hyf-react-api.herokuapp.com/todos/' + id, {
      method: "DELETE",
    })
      .then(this.handleFetchErrors)
  }

  patchData(id, data) {
    return fetch('https://hyf-react-api.herokuapp.com/todos/' + id, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(this.handleFetchErrors)
  }

  handleFetchErrors(response) {
    if (!response.ok) throw Error(response.statusText);
    return response;
  }

}

const todos = new TodosStore();

export default todos;