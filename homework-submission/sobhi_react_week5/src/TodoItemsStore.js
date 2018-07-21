import { observable, action, computed, configure, runInAction } from "mobx";

configure({ enforceActions: true })

const hyfUrl = "https://hyf-react-api.herokuapp.com";

class TodoItemsStore {

    @observable todoItems = [];

    @action fetchTodos = () => {
        fetch(`${hyfUrl}/todos`)
            .then(response => response.json())
            .then(parsedTodos => {
                runInAction(() => {
                    this.todoItems = parsedTodos;
                })
            })
            .catch(err => console.log(err));
    };

    @action addTodo = e => {
        e.preventDefault();
        const newTodo = {
            id: this.todoItems.length + 1,
            description: e.target.description.value,
            deadline: e.target.deadline.value,
            done: false
        };
        fetch(`${hyfUrl}/todos/create`, {
            method: "POST",
            body: JSON.stringify(newTodo),
            headers: { 'content-type': 'application/json' }
        })
            .then(response => response.json())
            .then(item =>
                runInAction(() => { this.todoItems = [...this.todoItems, item] }))
            .catch(err => console.log(err));
    };

    @action removeTodo = index => {
        fetch(`${hyfUrl}/todos/${index._id}`, {
            method: "DELETE",
            headers: { 'content-type': 'application/json' }
        })
            .then(response => response.json())
            .then(parsedTodos => {
                runInAction(() => { this.parsedTodos.splice(index, 1); })
            })
            .catch(err => console.log(err));

    };
    @computed get todosCounter() {
        return this.todoItems.length;
    }
}
const todosStoreInstance = new TodoItemsStore();

export default todosStoreInstance;