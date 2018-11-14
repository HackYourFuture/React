
import { observable, computed, action } from "mobx";


class TodosStore {
    @observable Todos = [
        {
            "id": 1,
            "description": "Get out of bed",
            "deadline": "2018-09-11",
            "done": true
        },
        {
            "id": 2,
            "description": "Brush teeth",
            "deadline": "2018-09-10",
            "done": false
        },
        {
            "id": 3,
            "description": "Eat breakfast",
            "deadline": "2018-09-09",
            "done": false
        }
    ];

    @action addTodo = (newTodo) => {
        this.Todos.push(newTodo);
    };

    @action removeTodo = (id) => {
        this.Todos.splice(id, 1);
    };

    @action isDone = (todo) => {
        
            todo.done = !todo.done;
            
                
        
        
}

    @computed get numberOfBooks() {
        return this.Todos.length;
    }
}

const store = new TodosStore();
export default store;