import { observable, action, runInAction } from 'mobx';


class TodosStore {
    @observable todos = {
        data: [],
        status: "loading"
    }

    @action async getTodos() {
        this.todos = [];
        this.status = 'loading';
        try {
            let fetchedTodos = await this.getData();
            runInAction(() => {
                this.todos = fetchedTodos
                this.status = 'done';
            });

        } catch (error) {
            runInAction(() =>
                this.status = 'error'
            )
        }
    }


    @action deleteTodo = async (id) => {
        this.status = "loading";
        try {
            await this.deleteData(id);
            runInAction(() => {
                this.todos = this.todos.filter(todo => todo.id !== id);
                this.status = "done";
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error"
            });
        }
    };

    @action checkBoxHandler = async (id) => {

        try {
            await this.checkData(id)
            runInAction(() => {
                const newTodos = this.todos.map(item => {
                    if (item.id === id) {
                        return {
                            ...item, done: !item.done
                        };
                    }
                    return item;
                });
                this.todos = newTodos;
                this.status = "done";
            })
        } catch (error) {
            runInAction(() => {
                this.status = "error"
            })
        }
    }

    @action addNewTodo = async (todo) => {
        const newTodo = {
            description: todo,
            deadline: new Date(),
            done: false
        }
        try {
            let newItem = await this.addData(newTodo)

            runInAction(() => {
                this.todos = [...this.todos, newItem]
                this.stet = 'done'
            })
        } catch (error) {
            runInAction(() => {
                this.state = 'error'
            })
        }
    }

    getData() {
        return fetch('https://hyf-react-api.herokuapp.com/todos')
            .then(response => response.json())
    }

    addData(id) {
        const todo = {
            method: "POST",
            body: JSON.stringify(id),
            headers: { "content-type": "application/json; charset=UTF-8 " }

        }
        return fetch('https://hyf-react-api.herokuapp.com/todos/create', todo)
            .then(response => response.json())
    }
    deleteData(id) {
        const deleteTodo = {
            method: "DELETE",
            body: JSON.stringify(id),
            headers: { "content-type": "application/json; charset=UTF-8 " }
        }
        return fetch('https://hyf-react-api.herokuapp.com/todos/' + id, deleteTodo)
            .then(response => response.json())
    }
    checkData(id) {
        const cheackData = {
            method: "PATCH",
            body: JSON.stringify(id),
            headers: { "content-type": "application/json; charset=UTF-8 " }
        }
        return fetch('https://hyf-react-api.herokuapp.com/todos/' + id, cheackData)
    }
}
const todos = new TodosStore();
export default todos;