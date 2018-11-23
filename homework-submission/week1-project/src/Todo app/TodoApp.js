import {observable, computed, action, runInAction} from 'mobx';

class TodoApp{
    @observable todos = {
        data: [],
        status:  'loading'
    };

    @computed get numberOfTodo(){
        return this.todos.data.length;
    } 

    @action async changeDoneProp(id) {
        try{
            this.todos.status = 'loading';
            const response = await this.patchRquest(this.todos.data[id]._id, {done: !this.todos.data[id].done});
            runInAction(() => {
                this.todos.status = 'success';
                this.todos.data[id].done = !this.todos.data[id].done;
            })
            
        }catch(error){
            runInAction(() => {
                this.todos.status = 'error';
            })
        }
        
    }

    @action async updateTodo(id, description, deadline){
        try{
            this.todos.status = 'loading';
            const todo = {
                description: description,
                deadline: deadline
            }
            const response = await this.patchRquest(this.todos.data[id]._id, todo);
            runInAction(() => {
                this.todos.status = 'success';
                this.todos.data[id].description = description;
                this.todos.data[id].deadline = deadline;
            })
        }catch(error){
            runInAction(() => {
                this.todos.status = 'error';
            })
        }
    }
    @action async deleteTodo(id){
        try{
            this.todos.status = 'loading';
            const response = await this.deleteFetch(this.todos.data[id]._id);
            runInAction(() => {
                this.todos.status = 'success';
                this.todos.data.splice(id, 1);
            })
        }catch(error){
            runInAction(() => {
                this.todos.status = 'error';
            })
        }
    }
    @action async addTodo(todo){
        try{
            this.todos.status = 'loading';
            const postedTodo = await this.postTodo(todo);
            runInAction(() => {
                this.todos.status = 'success';
                this.todos.data.push(postedTodo);
            })
        }catch(error){
            runInAction(() => {
                this.todos.status = 'error';
            })
        }
    }
    @action async fillTodos(){
        this.todos.status = 'loading';
        try{
            const todos = await this.getTodos();
            runInAction(() => {
                this.todos.data = todos;
                this.todos.status = 'success';
            })
        }catch(error){
            runInAction(() => {
                this.todos.status = 'error';
            })
        }
    }
    getTodos(){
        return fetch('https://hyf-react-api.herokuapp.com/todos')
        .then(response => response.json())
    }

    postTodo(todo){
    
        return fetch('https://hyf-react-api.herokuapp.com/todos/create', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
    }

    deleteFetch(id){
        return fetch('https://hyf-react-api.herokuapp.com/todos/' + id, {method: 'DELETE'})
        .then(response => response.json())
    }

    patchRquest(id, todo){
        return fetch('https://hyf-react-api.herokuapp.com/todos/' + id, {
            method: 'PATCH',
            body: JSON.stringify(todo),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
    }


}

const app = new TodoApp()

export default app;