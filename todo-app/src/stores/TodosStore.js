import { observable, action, computed, configure, runInAction } from "mobx";

configure({ enforceActions: true });

const todosURL = "https://hyf-react-api.herokuapp.com/todos";

const errorMessage = "* Request was not successful. Please try again.";

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
    editInputs = defaultInputValues;
    
    @observable
    error = null;  
    
    @action 
    setError = message => {
        this.error = message;
    }   

    @action
    getAllTodos = async () => {
        try {
            const res = await fetch(todosURL);
            const data = await res.json();
            
            runInAction(() => {
                this.todos = data;
            })
        }
        catch (err) {
            this.setError(errorMessage);
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
                    this.addFormInputs = defaultInputValues;
                    this.setError(null);
                    this.getAllTodos();
                })
            }
            catch (err) {
                this.setError(errorMessage);
            }
        }
        else {
            this.setError("* Both description and date are required.")
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
                this.getAllTodos();
            })
        }
        catch (err) {
            this.setError(errorMessage)();
        }
    }

    @action
    editTodo = (todoID) => {
        this.editID = todoID;
        const { description, deadline } = this.todos.find(todo => todo._id === todoID);
        this.editInputs = { description, deadline };
    }

    @action
    changeEditInput = (value, field) => {
        this.editInputs[field] = value;
    }    

    @action
    closeEditing = () => {
        this.editID = null;
        this.setError(null);
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
                    this.editInputs = defaultInputValues;
                    this.setError(null);
                    this.getAllTodos();
                })
            }
            catch (err) {
                this.setError(errorMessage);
            }
        }
        else {
            this.setError("* Both fields are required.")
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
        }
        catch (err) {
            this.setError(errorMessage);
        }
    }

    @computed
    get doneCount() {
        return this.todos.filter(todo => todo.done).length;
    }
} 

export default new TodosStore();
