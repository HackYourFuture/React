import { observable, computed, action, runInAction, configure } from 'mobx';

import Data from './../data/data';

configure({ enforceActions: "observed" })
class TodosStore {
    
    @observable todos = [...Data];
    @observable apiTodos = [];
    @observable state = "loading";

    @computed get numberOfData() {
        return this.todos.length;
    }

    @computed get apiDataNumber() {
        return this.apiTodos.length;
    }

    @action addNewItem = (formFields) => {
        const arrSize = this.numberOfData;
        const newItem = {
            id: arrSize + 1,
            description: formFields.description,
            deadline: formFields.deadline,
            done: formFields.done
        };    
        this.todos.push(newItem);
    }

    @action deleteItem = (itemId) => {
        const newData = this.todos.filter(item => item.id !== itemId);
        this.todos = [...newData];
    }

    @action async retrieveData() {
        try {
        this.status = 'loading';
        const results = await this.loadDate()
            runInAction(() => {
                this.state = 'downloaded';
                this.apiTodos = results;
            });
        
        }
        catch(err) {console.log(err);}
    }

    @action createNewPost = (newItem) => {
        this.postNewItem(newItem)
            .then(result => {
                runInAction(() => {
                    const elements = [...this.apiTodos, newItem];
                    this.apiTodos = elements;
                });
            })
            .catch(err => console.log(err));
    }

    @action updateItem = (itemId, item) => {
        const toUpdateItem = {description: item.description, deadline: item.deadline};
        this.fetchUpdateTodo(itemId, toUpdateItem)
            .then(result => {
                runInAction(() => {
                    this.apiTodos = this.apiTodos.map(el => {
                        if(el._id === itemId) {
                            return { ...el, description: item.description, deadline: item.deadline, done: item.done };
                        }
                        return el;
                    });
                });
            })
            .catch(err => console.log(err));
    }

    @action changeDoneValue = (itemId) => {
        const itemDone = this.apiTodos.filter(el => el._id === itemId);
        const toUpdateItem = {done: !itemDone[0].done};
        this.fetchUpdateTodo(itemId, toUpdateItem)
            .then(result => {
                runInAction(() => {
                    this.apiTodos = this.apiTodos.map(el => {
                        if(el._id === itemId) {
                            return { ...el, done: !el.done};
                        }
                        return el;
                    });
                });
            })
            .catch(err => console.log(err));
    }

    loadDate() {
        return fetch('https://hyf-react-api.herokuapp.com/todos')
                .then(response => response.json())
                .catch(err => console.log(err));
    }

    postNewItem(newItem) {
        return fetch('https://hyf-react-api.herokuapp.com/todos/create', {
                    method: 'POST',
                    body: JSON.stringify(newItem),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(res => res.json())
                .then(response => console.log('Success:', JSON.stringify(response)))
                .catch(error => console.error('Error:', error));
    }

    fetchUpdateTodo(itemId, item) {
        return fetch('https://hyf-react-api.herokuapp.com/todos/' + itemId, {
                    method: 'PATCH',
                    body: JSON.stringify(item),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(res => res.json())
                .then(response => console.log('Success:', JSON.stringify(response)))
                .catch(error => console.error('Error:', error));
    }
}
 
const store = new TodosStore();
export default store;