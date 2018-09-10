import { observable, action, configure } from 'mobx';
import todoObj from '../todo.json';

configure({
  enforceActions: 'observed'
});

class TodosStore {
  @observable todos = todoObj;
  @observable editing = -1;

  @action checkBoxHandler = (id) => {
    const newTodos = this.todos.map(item => {
      if (item.id === parseInt(id, 10)) {
        return {
          ...item,
          done: !item.done
        };
      }
      return item;
    });
    this.todos = newTodos;
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
    if (/^\s*$/.test(newDescription))
      return;
    const newTodos = this.todos.map(item => {
      if (item.id === parseInt(id, 10)) {
        return {
          ...item,
          description: newDescription
        };
      }
      return item;
    });
    this.todos = newTodos;

  }

  @action addHandler = (description, deadline) => {
    const id = Math.max(...this.todos.map(todo => todo.id), 0) + 1;
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