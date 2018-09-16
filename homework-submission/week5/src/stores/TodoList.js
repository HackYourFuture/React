import { observable, action, configure, runInAction } from 'mobx';
import uuid from 'uuid/v4';
configure({enforceActions: 'observed'})

class Store {
  @observable
  items = [];
  @observable
  newItem = {
    newId: uuid(),
    newDescription: '',
    newDeadline: ''
  };
  @observable
  state = 'pending';

  @action
  async getTodo() {
    this.items = [];
    this.state = 'pending';
    try {
      const items = await this.getData();
      runInAction(() => {
        this.state = 'done';
        this.items = items.map(item => ({ ...item, editable: false }));
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  @action
  async checkAsDone(id) {
    this.state = 'pending';
    try{

    runInAction(() => {
      this.items = this.items.map(item => 
        item.id === id 
        ? { ...item, done: !item.done } 
        : item);
      });
      await this.updateData(id, this.items );

    } catch (error) {
      runInAction(() => {
      this.state = 'error'
      });
    }
  };

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
    return (this.newItem.newDescription = '');
  };

  @action
  resetNewDeadline = () => {
    return (this.newItem.newDeadline = '');
  };

  @action
  addNewDescription = newDescription => {
    return (this.newItem.newDescription = newDescription);
  };

  @action
  addNewDeadline = value => {
    return (this.newItem.newDeadline = value);
  };

  @action
  removeTodo = id => {
    id = parseInt(id, 10);
    return (this.items = this.items.filter(item => item.id !== id));
  };

  @action
  editTodo = id => {
    id = parseInt(id, 10);
    return (this.items = this.items.map(
      item => (item.id === id ? { ...item, editable: true } : item)
    ));
  };

  @action
  updateTodo = id => {
    id = parseInt(id, 10);
    return (this.items = this.items.map(
      item =>
        item.id === id
          ? {
              ...item,
              description: this.newItem.newDescription,
              deadline: this.newItem.newDeadline,
              editable: !item.editable
            }
          : item
    ));
  };

  @action
  cancelTodo = id => {
    id = parseInt(id, 10);
    return (this.items = this.items.map(
      item => (item.id === id ? { ...item, editable: false } : item)
    ));
  };

  getData() {
    return fetch('https://hyf-react-api.herokuapp.com/todos')
    .then(response => this.handleErrors(response))
    .then(res => res.json());
  }

  postData(data) {
    return fetch('https://hyf-react-api.herokuapp.com/create', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => this.handleErrors(response))
    .then(res => res.json());
  }

  deleteData(id) {
    return fetch(`https://hyf-react-api.herokuapp.com/todos/:${id}`, {
      method: 'DELETE'
    })
    .then(response => this.handleErrors(response))
    .then(res => res.json());
  }

  updateData(id, data) {
    return fetch(`https://hyf-react-api.herokuapp.com/todos/:${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => this.handleErrors(response))
    .then(res => res.json());
  }

  handleErrors(response) {
    if (!response.ok) throw Error(response.statusText);
    return response;
  }
}

const TodoList = new Store();

export default TodoList;