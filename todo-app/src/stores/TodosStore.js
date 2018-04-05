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
    
    @observable
    error = false;    

    @action
    getAllTodos = async () => {
        try {
            const res = await fetch(todosURL);
            const data = await res.json();
            
            runInAction(() => {
                this.error = false;
                this.todos = data;
            })

        } catch (err) {
            runInAction(() => {
                this.error = true;
            })
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
            const newTodo = {
                description,
                deadline,
                done: false
            }
            try {
                await fetch(`${todosURL}/create`, {
                    method: "POST",
                    body: JSON.stringify(newTodo),
                    headers: { "content-type": "application/json" }
                });

                runInAction(() => {
                    this.error = false;
                    this.addFormInputs = defaultInputValues;
                    this.getAllTodos();
                })

            } catch (err) {
                runInAction(() => {
                    this.error = true;
                })
            }
        }    
    }

    @action
    toggleCheck = async (todoID) => {
        const todo = this.todos.find(todo => todo._id === todoID);
        try {
            await fetch(`${todosURL}/${todoID}`, {
                method: "PATCH",
                body: JSON.stringify({ done: !todo.done }),
                headers: { "content-type": "application/json" }
            });

            runInAction(() => {
                this.error = false;
                this.getAllTodos();
            })
            
        } catch (err) {
            runInAction(() => {
                this.error = true;
            })
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
                    this.error = false;
                    this.closeEditing();
                    this.getAllTodos();
                })

            } catch (err) {
                runInAction(() => {
                    this.error = true;
                })  
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
                this.error = false;
                this.getAllTodos();
            })

        } catch (err) {
            runInAction(() => {
                this.error = true;
            })
        }
    }

    @computed
    get doneCount() {
        return this.todos.filter(todo => todo.done).length;
    }
} 

export default new TodosStore();
