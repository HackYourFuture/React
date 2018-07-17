import { observable, action, computed, configure, runInAction } from "mobx";
// import todoListItem from "./../todoListItem.json";

configure({ enforceActions: true })

const url = "https://hyf-react-api.herokuapp.com";

class TodoListStore {

    @observable listItems = [];

    fetchAll = () => {
        fetch(`${url}/todos`)
            .then(response => response.json())
            .then(todos => {
                runInAction(() => {
                    this.listItems = todos;
                })
            })
            .catch(err => console.log(err));
    }

    @action
    handleChangeCheckBox = (item) => {
        item.done = !item.done
        fetch(`${url}/todos/${item._id}`, {
            method: "PATCH",
            body: JSON.stringify({ done: item.done }),
            headers: { 'content-type': 'application/json', }
        }).then(this.fetchAll())
            .catch(err => console.log(err))

    }

    onDelete = (id) => {
        fetch(`${url}/todos/${id._id}`, {
            method: "DELETE",
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(element => {
                const newTodoItems = this.listItems.filter((id) => element._id !== id._id);
                runInAction(() => { this.listItems = newTodoItems; })
            })
            .catch(err => console.log(err));
    }

    @action
    onAdd = (event) => {
        event.preventDefault();
        const newTodo = {
            "id": this.listItems.length + 1,
            "description": event.target.description.value,
            "deadline": new Date(event.target.deadline.value),
            "done": false
        };
        fetch(`${url}/todos/create`, {
            method: "POST",
            body: JSON.stringify(newTodo),
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(event =>
                runInAction(() => { this.listItems = [...this.listItems, event] }))
            .catch(err => console.log(err));
    }
    @action
    save = (description, deadline, id, index) => {
        const newToDo = { id, description, deadline }
        const toDos = [...this.listItems]
        toDos[index] = newToDo
        this.listItems = toDos
    }

    @computed get todoCount() {
        return this.listItems.length;
    }
}

const TodoListInstance = new TodoListStore();

export default TodoListInstance;