import { observable, action, computed, configure } from "mobx";
import todos from "./todos.json";


configure({ enforceActions: true })

class TodoListStore {

    @observable TodoListItems = todos;

    @action addTodo = e => {
        e.preventDefault();
        const newTodo = {
            id: todos.length + 1,
            description: e.target.description.value,
            deadline: e.target.deadline.value,
            done: false
        };
        this.TodoListItems.push(newTodo);
    };

    @action removeTodo = index => {
        this.TodoListItems.splice(index, 1);
    };

    @action updateTodo = (e, index, toggleUpdating) => {
        e.preventDefault();
        todos[index] = {
            id: index + 1,
            description: e.target.description.value,
            deadline: e.target.deadline.value,
            done: false
        };
        this.TodoListItems = todos;
        toggleUpdating();
    };

    @computed get todosCounter() {
        return this.TodoListItems.length;
    }
}
const StoreInstance = new TodoListStore();

export default StoreInstance;