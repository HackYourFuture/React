import {observable, action, useStrict} from 'mobx';

useStrict(true);

export default class TododStore {

    @observable
    todos = [];
  
    loadTodos(){
    fetch("https://hyf-react-api.herokuapp.com/todos")
        .then(response => response.json())
        .then(response => {
            this.setTodos(response)
        })     
    };

    @action
    setTodos(todos){
        this.todos = todos
    };

    findTodo(id) {
        return this.todos
          .find(todo => todo._id === id)
    };

    @action
    addTodo(text, deadlineTime) {

        const todo = {
            description: text,
            deadline: deadlineTime,
            done: false,
        };

        fetch('https://hyf-react-api.herokuapp.com/todos/create', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            }, body: JSON.stringify(todo),
        })
        .then(response => response.json())
        .then(response => this.loadTodos())
    };

    @action
    handleTodoRemove = (id) => {
        fetch(`https://hyf-react-api.herokuapp.com/todos/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(response => this.loadTodos())
    };

    @action
    onSaveTodo = (id, text) => {
      fetch(`https://hyf-react-api.herokuapp.com/todos/${id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            }, body: JSON.stringify({description : text}),
        })
        .then(response => response.json())
        .then(response => this.loadTodos())
    };

    @action
    onSaveDeadline = (id, deadlineTime) => {
        fetch(`https://hyf-react-api.herokuapp.com/todos/${id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            }, body: JSON.stringify({deadline : deadlineTime}),
        })
        .then(response => response.json())
        .then(response => this.loadTodos())
    };

    @action
    handleDoneToggle = (id) => {
        const todo = this.findTodo(id)
    
        todo.done = !todo.done

        fetch(`https://hyf-react-api.herokuapp.com/todos/${id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            }, body: JSON.stringify({done : todo.done}),
        })
        .then(response => response.json())
        .then(response => this.loadTodos())
    };
};
