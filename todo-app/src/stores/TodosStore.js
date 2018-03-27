import todos from "../data/todos.json";
import { observable, action, computed, configure } from "mobx";

configure({ enforceActions: true });

const defaultInputValues = {
    description: "",
    deadline: ""  
}

class TodosStore {

    @observable
    todos = todos

    @observable
    addFormInputs = defaultInputValues

    @observable
    editID = null   

    @computed
    get nextId() {
        if (!this.todos.length) {
            return 1;
        }
        const todoIDs = this.todos.map(todo => todo.id);
        return Math.max(...todoIDs) + 1
    }

    @action
    changeAddFormInput = (value, field) => {
        this.addFormInputs[field] = value;
    } 
    
    @action
    addTodo = (id, description, deadline) => {
        if (description && deadline) {
            const newTodo = {
                id,
                description,
                deadline,
                done: false
            }
            this.todos.push(newTodo);
            this.addFormInputs = defaultInputValues;
        }
    }

    @action
    toggleCheck = todoID => {
        this.todos = this.todos.map(todo => (
            todo.id === todoID
                ? { ...todo, done: !todo.done }
                : todo
        ));
    }

    @action
    editTodo = (todoID) => {
        this.editID = todoID
    }

    @action
    changeEditInput = (value, todoID, field) => {
        this.todos = this.todos.map(todo => (
            todo.id === todoID
                ? { ...todo, [field]: value }
                : todo
        ));
    }    

    @action
    cancelEdit = () => {
        this.editID = null;
    }  

    @action
    saveUpdate = (todoID, description, deadline) => {
        if (description && deadline) {
            this.todos = this.todos.map(todo => (
                todo.id === todoID
                    ? { ...todo, description, deadline }
                    : todo
            ));
            this.cancelEdit();
        }   
    }

    @action
    deleteTodo = (todoID) => {
        this.todos = this.todos.filter(todo => (
            todo.id !== todoID
        ));
    }

    @computed
    get doneCount() {
        return this.todos.filter(todo => todo.done).length;
    }
} 

export default new TodosStore();
