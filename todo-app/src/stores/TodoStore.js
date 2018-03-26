import { action, observable } from 'mobx';
// import moment from 'moment';

// Data
import TodoData from '../data/todo.json';

export class TodoStore {
  @observable todos = TodoData
  @observable newDescription = ''
  @observable newDeadline = ''
  @observable isEditing = false
  @observable changedText = ''

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
    this.newDeadline =''
  }

  // editing todo

  @action
  toggleEdit = (todo) => {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === todo.id) { 
        console.log(todo.id)
        this.changedText = this.todos[i].description
      }
      
    }
    this.isEditing = !this.isEditing
  }
  @action
  handleChange = (event) => {
    this.changedText = event.target.value
    console.log(event.target.value)

  }
  @action
  handelEditSubmit = () => {
    for (let i = 0; i < this.todos.length; i++) {
      // if (this.todos[i].description === this.changedText) {
      // }
      this.todos[i].description = this.changedText
    
    }
    this.isEditing = !this.isEditing
  }
  @action
  handelCancel = () => {
    this.isEditing = !this.isEditing

  }
}

export default new TodoStore();
 