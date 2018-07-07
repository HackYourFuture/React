import { observable, computed } from 'mobx'
import Todo from '../models/Todo'

  class TodoStore {
      @observable todos = []
      @observable filter = ''

      @computed
      get filterList() {
          const match = new RegExp(this.filter, 'i')
          return this.todos.filter(todo => !this.filter || match.test(todo.text))
      }

      createTodo(value) {
          this.todos.push(new Todo(value))
      }

      toggleTodoCheck(todo) {
          todo.isComplete = !todo.isComplete
      }
  }

  export default new TodoStore()
