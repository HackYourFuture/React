import { observable, action, configure, runInAction } from 'mobx';
import TodoItems from '../sources/todoItems.json';
configure({enforceActions: "observed"})

class Store {
  @observable
  items = localStorage.items !== undefined
    ? JSON.parse(localStorage.items)
    : TodoItems;
  @observable
  newItem = {
    newId:
      localStorage.items !== undefined
        ? ((JSON.parse(localStorage.items))[localStorage.items.length -1].id + 1)
        : (TodoItems[TodoItems.length - 1].id + 1),
    newDescription: '',
    newDeadline: '',
  }
  @observable
  state= 'pending';

  @action
  async getTodo() {
    this.items = [];
    this.state = 'pending';
    try {
      const items = await this.getData()
      runInAction(() => {
        this.state = 'done';
        this.items = items.filter((post, index) => index < 10);
      })
    } 
    catch (error) {
      runInAction(() => {
        this.state = 'error';
      })
    }
  }

  @action
  fetchFromLocalStorage() {
    let copyItems = localStorage.items;
    if(copyItems) {
      JSON.parse(copyItems);
    }
  }

  @action
  checkAsDone = (id) => {
    return this.items = this.items.map((item) =>
      item.id === id
      ? {...item, done: !item.done }
      : item
    );
  }

  @action
  addTodo = () => {
    const newItem = {
      id: this.newItem.newId,
      description: this.newItem.newDescription,
      deadline: this.newItem.newDeadline,
      done: false,
      editable: false
    };

    return this.items.push(newItem);

  };

  @action
  resetNewDescription = () => {
    return this.newItem.newDescription = "";
  }
  
  @action
  resetNewDeadline = () => {
    return this.newItem.newDeadline = "";
  }

  @action
  addNewDescription = (newDescription) => {
    return this.newItem.newDescription = newDescription;
  };

  @action
  addNewDeadline = (value) => {
    return this.newItem.newDeadline = value;
  };

  @action 
  removeTodo = (id) => {
    id = parseInt(id, 10);
    return this.items = this.items.filter(item => item.id !== id);
  };

  @action 
  editTodo = (id) => {
    id = parseInt(id, 10);
    return this.items = this.items.map((item) =>
      item.id === id
      ? { ...item, editable: true }
      : item
    );
  };

  @action
  updateTodo = (id) => {
    id = parseInt(id, 10);
    return this.items = this.items.map((item) => 
      item.id === id
      ? { ...item, description: this.newItem.newDescription, deadline: this.newItem.newDeadline, editable: !item.editable }
      : item
    );
  }

  @action
  cancelTodo = id => {
    id = parseInt(id, 10);
    return this.items = this.items.map(item => 
      item.id === id
      ? { ...item, editable: false }
      : item
    );
  }

  getData() {
    fetch("https://jsonplaceholder.typicode.com/Todos")
      .then(res => res.json()); 
  }
}

const TodoList = new Store();

export default TodoList;