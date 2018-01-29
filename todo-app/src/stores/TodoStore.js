import { observable, action, useStrict, runInAction } from 'mobx';

useStrict(true)
export default class TaskStore {

  @observable
  todos = [];

  @observable
  loadingTodos = false

  @action
  loadTodoItems(showLoader = true) {

    if (showLoader) {
      this.loadingTodos = true
    }

    fetch('https://hyf-react-api.herokuapp.com/todos')
      .then(res => res.json())
      .then(res => {
        runInAction(() => {
          this.loadingTodos = false
          this.todos = res
        })

      })

  }

  @action
  addTodo(text, date) {
    const todo = {
      description: text,
      deadline: date,
      done: false
    }
    fetch('https://hyf-react-api.herokuapp.com/todos/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    })
      .then(res => res.json())
      .then(res => {
        this.loadTodoItems(false)
      })
  }

  @action
  removeTodo(id) {
    console.log(id)
    fetch(`https://hyf-react-api.herokuapp.com/todos/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(res => {
        this.loadTodoItems(false)
      })
  }
  @action
  toggleStatus(id) {
    const todo = this.todos.find(todotodoItem => todotodoItem._id === id);
    if (!todo) {
      throw new Error('You are trying to modify a todo that does not exist')
    }
    todo.done = !todo.done
    fetch(`https://hyf-react-api.herokuapp.com/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        done: todo.done,
      }),
    })
      .then(res => res.json())
      .then(res => {
        this.loadTodoItems(false)
      })

  }

  @action

  handleSaveEdit(id, description) {
    const todo = this.todos.find(todotodoItem => todotodoItem._id === id);
    if (!todo) {
      throw new Error('You are trying to modify a todo that does not exist')
    }
    todo.description = description;
    fetch(`https://hyf-react-api.herokuapp.com/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        description: description,
      }),
    })
      .then(res => res.json())
      .then(res => {
        this.loadTodoItems(false)
      })

  };


}