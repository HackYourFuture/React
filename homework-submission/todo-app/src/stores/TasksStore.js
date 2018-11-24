import { observable, action, runInAction } from "mobx";

class TasksStore {
    @observable data = [];
    @observable state = 'loading';

    @action
    handleCheck = async id => {
        this.state = "Loading";
        try {
            await fetch(`https://hyf-react-api.herokuapp.com/todos/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            });
            runInAction(() => {
                this.data = this.data.map(todo => {
                    if (todo._id === id) {
                        return {
                            ...todo, done: !todo.done
                        }
                    }
                    return todo;
                })
            });
        } catch (error) {
            runInAction(() => {
                this.state = "Error";
            });
        }
    };

    @action
    handleAdd = async (description, deadline) => {
        this.state = "Loading";
        const newTodo = {
            description,
            deadline: deadline.toLocaleDateString(),
            done: false
        }

        try {
            const res = await fetch(`https://hyf-react-api.herokuapp.com/todos/create`, {
                method: "POST",
                body: JSON.stringify(newTodo),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            });
            const newItem = await res.json()

            runInAction(() => {
                this.data = [...this.data, newItem];
            });
        } catch (error) {
            runInAction(() => {
                this.state = "Error";
            });
        }
    };

    @action async getTodos() {
        this.data = [];
        this.state = 'Loading';
        try {
            const todos = await this.getData();
            runInAction(() => {
                this.state = 'Done';
                this.data = todos;
            })
        } catch (error) {
            runInAction(() => {
                this.state = 'Error';
            })
        }
    }

    getData() {
        return fetch('https://hyf-react-api.herokuapp.com/todos')
            .then(response => response.json())
    }
}

const store = new TasksStore();
export default store;