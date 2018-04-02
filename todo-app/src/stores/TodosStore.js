import { observable, action, computed, configure, runInAction } from "mobx";

configure({ enforceActions: true });

const todosURL = "https://hyf-react-api.herokuapp.com/todos";

const defaultInputValues = {
    description: "",
    deadline: ""
};


class TodosStore {

    @observable
    todos = [];

    @observable
    addFormInputs = defaultInputValues;

    @observable
    editID = null;  

    @action
    getAllTodos = async () => {
        try {
            const res = await fetch(todosURL);
            const data = await res.json();
            
            runInAction(() => {
                this.todos = data;
            })
        } catch (err) {
            console.error(err);   
        }
    }    

    @action
    changeAddFormInput = (value, field) => {
        this.addFormInputs[field] = value;
    } 
    
    @action
    addTodo = async () => {
        const { description, deadline } = this.addFormInputs;

        if (description && deadline) {
            try {
                const newTodo = {
                    description,
                    deadline,
                    done: false
                }
                await fetch(`${todosURL}/create`, {
                    method: "POST",
                    body: JSON.stringify(newTodo),
                    headers: { "content-type": "application/json" }
                });

                runInAction(() => {
                    this.addFormInputs = defaultInputValues;
                    this.getAllTodos();
                })
            } catch (err) {
                console.error(err);
            }
        }    
    }

    @action
    toggleCheck = async (todoID) => {
        try {
            const todo = this.todos.find(todo => todo._id === todoID);
            await fetch(`${todosURL}/${todoID}`, {
                method: "PATCH",
                body: JSON.stringify({ done: !todo.done }),
                headers: { "content-type": "application/json" }
            });

            runInAction(() => {
                this.getAllTodos();
            })
        } catch (err) {
            console.error(err);
        }
    }

    @action
    editTodo = (todoID) => {
        this.editID = todoID
    }

    @action
    changeEditInput = (todoID, value, field) => {
        this.todos = this.todos.map(todo => (
            todo._id === todoID
                ? { ...todo, [field]: value }
                : todo
        ));
    }    

    @action
    closeEditing = () => {
        this.editID = null;
    }  

    @action
    saveUpdate = async (todoID, description, deadline) => {
        if (description && deadline) {
            try {
                await fetch(`${todosURL}/${todoID}`, {
                    method: "PATCH",
                    body: JSON.stringify({ description, deadline }),
                    headers: { "content-type": "application/json" }
                });
                runInAction(() => {
                    this.closeEditing();
                    this.getAllTodos();
                })
            } catch (err) {
                console.error(err);
            }
        }
    }

    @action
    deleteTodo = async (todoID) => {
        try {
            await fetch(`${todosURL}/${todoID}`, {
                method: "DELETE",
            });
            runInAction(() => {
                this.getAllTodos();
            })
        } catch (err) {
            console.error(err);
        }
    }

    @computed
    get doneCount() {
        return this.todos.filter(todo => todo.done).length;
    }
} 

export default new TodosStore();
