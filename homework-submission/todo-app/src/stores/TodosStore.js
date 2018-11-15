import { observable, computed, action } from 'mobx';
import Data from './../data/data';

class TodosStore {
    
    @observable todos = [...Data];

    @computed get numberOfData() {
        //const x = this.todos.map(item => item.description);
        return this.todos.length;
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
    
}
 
const store = new TodosStore();
export default store;