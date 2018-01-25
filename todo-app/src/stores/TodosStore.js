import {observable, autorun, action} from 'mobx';
import Moment from 'moment';
import {saveTodos, loadTodos} from '../storage';

export default class TododStore {

    constructor() {
        autorun(() => {
            saveTodos(this.todos);
        });
    };

    @observable
    todos = loadTodos();

    findTodo(id) {
        return this.todos
          .find(todo => todo.id === id)
    };

    @action
    addTodo(text, deadline) {
        const ids = this.todos.map(todo => todo.id)
        const todo = {
                id: ids.length === 0 ? 1 : Math.max(...ids) + 1,
                task: text,
                addedTime: Moment().format('YY-MM-DD'),
                deadlineTime: deadline,
                done: false,
        };
        this.todos.push(todo);
    };

    @action
    handleTodoRemove = (id) => {
        this.todos = this.todos.filter(todo => todo.id !== id);
    };

    @action
    onSaveTodo = (id, task) => {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
              return {...todo, task};
            } else {
              return todo
            }
      });
    };

    @action
    onSaveDeadline = (id, deadlineTime) => {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                return {...todo, deadlineTime};
            } else {
                return todo
            }
        });  
    };

    @action
    handleDoneToggle = (id) => {
        const todo = this.findTodo(id)
    
        todo.done = !todo.done
    };
};
