import {observable, computed, action} from 'mobx';

class TodoApp{
    @observable todoList = [];

    @action addTodo = (todo) => {
        this.todoList.push(todo);
    };
    @computed get numberOfTodo(){
        return this.todoList.length;
    } 
    @action deleteTodo = (id) => {
        this.todoList.splice(id, 1);
    }
    @action changeDoneProp = (id) => {
        this.todoList[id].done = !this.todoList[id].done;
    }
    @action updateTodo = (id, description, deadline) =>{
        this.todoList[id].description = description;
        this.todoList[id].deadline = deadline;
    }
}

const app = new TodoApp()

export default app;