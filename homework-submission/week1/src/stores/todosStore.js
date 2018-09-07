import { observable, action, configure } from 'mobx';
import todoObj from '../todo.json';

configure({
  enforceActions: true
});

class TodosStore {
  @observable todos = todoObj;
  @observable editing = -1;

  @action checkBoxHandler = (id) => {
    const result = this.todos.map(item => {
      if (item.id === parseInt(id, 10)) item.done = !item.done;
      return item;
    });
    this.todos = result;
  }

  @action deleteHandler = (id) => {
    const result = this.todos.filter(item => item.id !== parseInt(id, 10));
    this.todos = result;
  }

  @action editHandler = (id) => {
    this.editing = id ? id : -1;
  }

  @action updateHandler = (id, newDescription) => {
    this.editing = -1;
    if (!(newDescription.length === 0 || /^\s*$/.test(newDescription))) {
      const result = this.todos.map(item => {
        if (item.id === parseInt(id, 10)) item.description = newDescription;
        return item;
      });
      this.todos = result;
    }
  }

  @action addHandler = (description, deadline) => {
    const id = this.todos.length !== 0 ? this.todos[this.todos.length - 1].id + 1 : 1;
    const todo = {
      id,
      description,
      deadline,
      "done": false
    }
    this.todos = [...this.todos, todo,];
  }
}

const todos = new TodosStore();

export default todos;