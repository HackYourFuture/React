import { action, observable } from 'mobx';
import moment from 'moment';

// Data
import TodoData from '../data/todo.json';

export class TodoStore {
  @observable todos = TodoData
  @observable newDescription = ''
  @observable newDeadline = moment().format('YYYY-MM-DD')

  // Change the state of DONE foreach todo
  @action
  handelCheck = (todo) => {
    todo.done = !todo.done
  }

  @action
  handelDeleteItem = (todo) => {
    this.todos = this.todos.filter((item) => {
      return item.id !== todo.id
    })
  }

  @action
  handleDescriptionChange = (event) => {
    this.newDescription = event.target.value
  }

  @action
  handleDateChange = (event) => {
    this.newDeadline = event.target.value
  }

  // add new todo
  @action
  handleSubmit = (event) => {
    event.preventDefault();
    const ids = this.todos.map((todo) => todo.id);
    const newId = this.todos.length > 0 ? Math.max(...ids) + 1 : 1;
    const newTodo = {
      id: newId,
      description: this.newDescription,
      deadline: this.newDeadline,
      done: false
    };
    this.todos = [newTodo, ...this.todos];
    this.newDescription = '';
    this.newDeadline = moment().format('YYYY-MM-DD');
  }
}

export default new TodoStore();
 