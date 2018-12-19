import {configure, observable, action, runInAction} from 'mobx';

configure({enforceActions: 'observed'});

class todoApp {
    
    @observable data = {
        todos: [],
        status: 'loading'
    };

    @observable idToUpdate = 0;
    @observable wrongInput = false;

    @action async listTodos() {
        this.data.todos = [];
        this.data.status = 'loading';
        try {
            const data = await this.getItems();
            runInAction(() => {
                this.data.todos = data;
                this.data.status = 'done';
            })
        }
        catch(error) {
            runInAction(() => {
                this.data.status = 'error';
            }) 
        }
    }

    @action changeDone = (id) => {
        this.data.status = 'loading';

        const index = this.data.todos.findIndex(item => item._id === id);
        const newDone = {done: !this.data.todos[index].done}

        this.patchItem(id, newDone).then(()=>{
            runInAction(() => {
                this.data.todos[index].done = newDone.done;
                this.data.status = 'done'
            })
        })
        .catch((error) => {
            runInAction(() => {
                this.data.status = 'error';
            }) 
        })
    }

    @action addNewTodo = (newEntry) => {
        const dateRegExp = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;

        if(newEntry.description === '' || !dateRegExp.test(newEntry.deadline)) {
            this.wrongInput = true
        } else {
            this.data.status = 'loading';
            this.createNewItem(newEntry).then(()=>{
                runInAction(() => {
                    // newEntry.id = Math.random().toString(36).substr(2, 12);
                    newEntry.deadline = new Date(newEntry.deadline).toJSON();
                    this.data.todos.push(newEntry);
                    this.data.status = 'done';
                    this.wrongInput = false;
                })
            })
            .catch((error) => {
                runInAction(() => {
                    this.data.status = 'error';
                }) 
            })
        }
    }

    @action deleteTodo = (id) => {    
        this.data.status = 'loading';

        const index = this.data.todos.findIndex(item => item._id === id);

        this.deleteItem(id).then(()=>{
            runInAction(() => {
                this.data.status = 'done';
                this.data.todos.splice(index, 1);
            })
        })
        .catch((error) => {
            runInAction(() => {
                this.data.status = 'error';
            }) 
        })
    }

    @action editButton = (id) => {
        this.idToUpdate = id
    }

    @action updateTodo = (select, id, newEntry) => {
        if(select === 'cancel') {
            this.idToUpdate = 0
        } else {
            this.data.status = 'loading';

            const index = this.data.todos.findIndex(item => item._id === id);
    
            this.patchItem(id, newEntry).then(()=>{
                runInAction(() => {
                    this.data.todos[index].description = newEntry.description;
                    this.data.todos[index].deadline = newEntry.deadline;
                    this.data.status = 'done';
                    this.idToUpdate = 0
                })
            })
            .catch((error) => {
                runInAction(() => {
                    this.data.status = 'error';
                }) 
            })
        }
    }

    getItems() {
        return fetch('https://hyf-react-api.herokuapp.com/todos')
            .then(response => response.json())
    }

    createNewItem(item) {
        return fetch('https://hyf-react-api.herokuapp.com/todos/create', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
    }

    patchItem(id, item) {
        return fetch(`https://hyf-react-api.herokuapp.com/todos/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(item),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())        
    }

    deleteItem(id) {
        return fetch(`https://hyf-react-api.herokuapp.com/todos/${id}`, {
            method: 'DELETE'
        })
    }
}

const myTodoApp = new todoApp();

export default myTodoApp;