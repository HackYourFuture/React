import {observable, action} from 'mobx';
import todos from '../component/todos.json';


// configure({enforceActions: true});

class todoApp {
    
    @observable data = {
        todos: [...todos],
        indexToUpdate: -1,
        wrongInput : false
      };

    @action changeDone = (index) => {
        this.data.todos[index].done = !this.data.todos[index].done
    }

    @action addNewTodo = (newEntry) => {
        const dateRegExp = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
    
        if(newEntry.description === '' || !dateRegExp.test(newEntry.deadline)) {
            this.data.wrongInput = true
        } else {
            const lastItemId = this.data.todos[this.data.todos.length-1].id
            newEntry.id = lastItemId+1;
            this.data.todos.push(newEntry);
            this.data.wrongInput = false;
        }
    }

    @action deleteTodo = (index) => {    
        this.data.todos.splice(index, 1);
    }

    @action editButton = (index) => {
        this.data.indexToUpdate = index
    }

    @action updateTodo = (select, index, newEntry) => {
        if(select === 'cancel') {
            this.data.indexToUpdate = -1
        } else {
            this.data.todos[index].description = newEntry.description;
            this.data.todos[index].deadline = newEntry.deadline;
            this.data.indexToUpdate = -1
        }
      }
}

const myTodoApp = new todoApp();

export default myTodoApp;