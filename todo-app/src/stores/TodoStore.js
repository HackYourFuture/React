import { action, observable, runInAction } from 'mobx';

const addTodoFormDefault = {
  description: '',
  deadline: '',
}

const API_ROOT = 'https://hyf-react-api.herokuapp.com';

export class TodoStore {
  @observable
  todos = []

  @observable
  addTodoForm = addTodoFormDefault

  @observable
  todoEditingID = null

  @observable
  todoEditingText = ''

  //TODOs API
  @action
  getTodos = async () => {
    const res = await fetch(`${API_ROOT}/todos`);
    const parseResponse = await res.json()
    runInAction(() => {
      this.todos = parseResponse
    })
  }

  // Change the state of DONE foreach todo
  @action
  toggleDone = async todo => {
    this.todos = this.todos.map((task) => {
      if (task._id === todo._id) {
        return {
          ...task,
          done: !task.done
        }
      }
      return task
    })
    await fetch(`${API_ROOT}/todos/${todo._id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        done: !todo.done
      })
    })
  }

  @action
  DeleteTodoItem = async (todoId) => {
    await fetch(`${API_ROOT}/todos/${todoId}`, {
      method: 'DELETE',
    })
    this.getTodos();
  }

  // add new todo
  @action
  createTodo = async() => {
    await fetch(`${API_ROOT}/todos/create`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(this.addTodoForm)
    })
    runInAction(() => {
      this.addTodoForm = addTodoFormDefault
    })
    this.getTodos();
  }

  @action
  saveTodo = async () => {
    await fetch(`${API_ROOT}/todos/${this.todoEditingID}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        description: this.todoEditingText
      })
    })
    this.getTodos()
    this.cancelEditing()
  }

  @action
  changeTodoFormField = (inputValue, field) => {
    this.addTodoForm[field] = inputValue
  }

  // editing todo

  @action
  toggleEdit = (id) => {
    this.todoEditingID = id
    this.todoEditingText = this.todos.filter(todo => {
      return todo._id === id
    })[0].description
  }

  @action
  changeTodoEditingText = (inputValue) => {
    this.todoEditingText = inputValue
  }

  @action
  cancelEditing = () => {
    this.todoEditingID = null
    this.todoEditingText = ''
  }

}

export default new TodoStore();
