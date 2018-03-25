import { observable, action, autorun } from "mobx"
import moment from "moment"

import todosList from "../data/myTodoList.json"

import { loadFromLocalStorage, saveToLocalStorage } from "../utils/localStorage"

const createTaskFormDefault = {
    description: "",
    deadLine: ""
}

class TodosStore {

    @observable
    todosList = loadFromLocalStorage()

    @observable
    createTaskForm = createTaskFormDefault

    @observable
    editingText = ""

    @observable
    taskEditingId= null    

    constructor() {
        autorun(() => {
            if (this.todosList.length === 0) {
                this.todosList = todosList
            }
        })
    }

    @action
    createTodo = () => {
        const ids = this.todosList.map(task => task.id)
        const newId = this.todosList.length > 0 ? Math.max(...ids) + 1 : 1
        if (this.createTaskForm.description && this.createTaskForm.deadLine) {
            const newTask = {
                id: newId,
                ...this.createTaskForm,
                done: false,
                creatingDate: moment().format("ddd, D MMM, YYYY, hh:mm a")
            }
            this.todosList = [
                newTask,
                ...this.todosList
            ]
            this.createTaskForm = createTaskFormDefault
        } else {
            alert("you should fill the values of Description and Deadline")
        }
        saveToLocalStorage(this.todosList)
    }

    @action
    removeTodo = id => {
        const newTodosList = this.todosList.filter(task => task.id !== id)
        this.todosList = newTodosList
        saveToLocalStorage(this.todosList)
    }

    @action
    toggleDone = id => {
        const newTodosList = this.todosList.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done
                }
            }
            return task
        })
        this.todosList = newTodosList
        saveToLocalStorage(this.todosList)
    }

    @action
    deleteAllCompleted = () => {
        const newTodosList = this.todosList.filter(task => task.done === false)
        this.todosList = newTodosList
        saveToLocalStorage(this.todosList)

    }

    @action
    editingDescription = (e) => {
        this.createTaskForm.description = e.target.value
    }

    @action
    editingDeadline = (e) => {
        this.createTaskForm.deadLine = moment(e.target.value).format("ddd, D MMM, YYYY")
    }

    @action
    editingTodo = (id, newDescription) => {
        const newTodosList = this.todosList.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    description: newDescription
                }
            }
            return task;
        })
        this.todosList = newTodosList
        saveToLocalStorage(this.todosList)

    }
    @action
    markAllTodos = () => {
        const newTodosList = this.todosList.map(task => {
            return {
                ...task,
                done: true
            }
        })
        this.todosList = newTodosList
        saveToLocalStorage(this.todosList)
    }

    @action
    unMarkAllTodos = () => {
        const newTodosList = this.todosList.map(task => {
            return {
                ...task,
                done: false
            }
        })
        this.todosList = newTodosList
        saveToLocalStorage(this.todosList)
    }

    @action
    onChangeEditingText = (e) => {
        this.editingText = e.target.value
    }

    @action
    enableEditMode = (id) => {
        this.taskEditingId = this.todosList.filter(task => task.id === id)[0].id
        this.editingText = this.todosList.filter(task => task.id === id)[0].description
    }

    @action
    saveEdited = (id) => {
        const newTodosList = this.todosList.map(task => {
            if (task.id === id && this.editingText) {
                return {
                    ...task,
                    description: this.editingText
                }

            }
            return task
        })
        this.todosList = newTodosList
        this.editingText = ""
        this.taskEditingId = null
        saveToLocalStorage(this.todosList)
    }
}


export default new TodosStore();