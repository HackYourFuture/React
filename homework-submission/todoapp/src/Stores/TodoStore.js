import { observable, action } from 'mobx';
import todoObj from '../data/todos.json';


class TodosStore {
  @observable todos = todoObj;

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

  @action deleteHandler = (ID) => {
    const newTodos = this.todos.filter(item => item.id !== ID);
    this.todos = newTodos;
  }

  @action editHandler = (ID) => {
    const Index = this.todos.findIndex(todo => todo.id === ID)
    const newTodo = { ...this.todos[Index], edit: !this.todos[Index].edit }
    this.todos[Index] = newTodo
  }

  @action updateHandler = (oldDescription, newDescription, newDeadline) => {
    const todos = [...this.todos]
    const neededIndex = todos.findIndex(todo => todo.description === oldDescription)
    const updatedItem = { ...this.todos[neededIndex], description: newDescription, deadline: newDeadline }
    todos[neededIndex] = updatedItem
    this.todos = todos

  }

  @action addHandler = (todo) => {
    if (this.todos.length === 0) {
      todo.id = 1
    } else {
      todo.id = (this.todos[this.todos.length - 1].id + 1)
    }
    this.todos = [...this.todos, todo]
  }
}

const todos = new TodosStore();

export default todos;