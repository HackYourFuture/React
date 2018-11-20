import { observable, action, runInAction } from 'mobx';
import uuidv4 from 'uuid/v4'


class TodosStore {
  @observable todos = []
  @observable state = 'loading'


  @action async getTodos() {
    this.todos = [];
    this.state = 'loading';
    try {
      let fetchedTodos = await this.getData();
      runInAction(() => {
        this.state = 'done';
        this.todos = fetchedTodos
      });

    } catch (error) {
      runInAction(() =>
        this.state = 'error'
      )
    }
  }
  @action checkBoxHandler = async (id) => {
    const Todo = this.todos.find(todo => todo._id === id);
    try {
      await this.updateData(id, { done: !Todo.done })
      runInAction(() => {
        const todos = this.todos.map(todo => {
          if (todo._id === id) {
            return {
              ...todo,
              done: !todo.done
            }
          }
          return todo
        })
        this.todos = todos;
        this.state = 'done';
      })
    } catch (error) {
      runInAction(() => {
        this.state = 'error'
      }
      )
    }
  }

  @action
  deleteHandler = async id => {
    this.state = "loading";
    try {
      await this.deleteData(id);
      runInAction(() => {
        this.todos = this.todos.filter(todo => todo._id !== id);
        this.state = "done";
      });
    } catch (error) {
      runInAction(() => {
        this.state = "error";
      });
    }
  };


  @action updateHandler = async (id, newDescription) => {
    this.state = 'loading'
    try {
      await this.updateData(id, { description: newDescription })
      runInAction(() => {
        const Todos = this.todos.map(todo => {
          if (todo._id === id) {
            return {
              ...todo,
              description: newDescription
            }
          }
          return todo
        });
        this.todos = Todos
        this.state = 'done'
      })
    } catch (error) {
      runInAction(() => {
        this.state = 'error'
      })
    }
  }

  @action addHandler = async (todo) => {
    const newTodo = {
      id: uuidv4(),
      description: todo,
      deadline: new Date(),
      done: false
    }
    try {
      let newItem = await this.sendData(newTodo)

      runInAction(() => {
        this.todos = [...this.todos, newItem]
        this.stet = 'done'
      })
    } catch (error) {
      runInAction(() => {
        this.state = 'error'
      })
    }
  }
  //server
  getData() {
    return fetch('https://hyf-react-api.herokuapp.com/todos')
      .then(response => response.json())
  }
  sendData(data) {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" }

    }
    return fetch('https://hyf-react-api.herokuapp.com/todos/create', options)
      .then(response => response.json())
  }
  deleteData(id) {
    const options = {
      method: 'DELETE',
      headers: { "content-type": "application/json" }
    }

    return fetch('https://hyf-react-api.herokuapp.com/todos/' + id, options)
      .then(response => response.json())
  }

  updateData(id, data) {
    const options = {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" }
    }
    return fetch('https://hyf-react-api.herokuapp.com/todos/' + id, options)
      .then(response => response.json())
  }

}

const todos = new TodosStore();

export default todos;