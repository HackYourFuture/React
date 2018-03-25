import { observable, action } from "mobx"
import moment from "moment"

import todosList from "../data/myTodoList.json"

import { loadFromLocalStorage, saveToLocalStorage } from "../utils/localStorage"

const createTaskFormDefault = {
    description: "",
    deadLine: ""
}

class TodosStore {

    @observable
    todosList = loadFromLocalStorage() || todosList

    @observable
    createTaskForm = createTaskFormDefault

    @observable
    editingDescriptionText = ""

    @observable
    editingDeadlineTime = ""    

    @observable
    taskEditingId= null    

    
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
    addingDescription = (e) => {
        this.createTaskForm.description = e.target.value
    }

    @action
    addingDeadline = (e) => {
        this.createTaskForm.deadLine = moment(e.target.value).format("ddd, D MMM, YYYY")
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
    onChangeDescriptionText = (e) => {
        this.editingDescriptionText = e.target.value
    }

    @action
    onChangeDeadlineTime = e => {
        this.editingDeadlineTime = moment(e.target.value).format("ddd, D MMM, YYYY") 
    }    

    @action
    enableEditMode = (id) => {
        this.taskEditingId = this.todosList.find(task => task.id === id).id
        this.editingDescriptionText = this.todosList.find(task => task.id === id).description
    }

    @action
    saveEdited = (id) => {
        const newTodosList = this.todosList.map(task => {
            if (task.id === id && this.editingDescriptionText) {
                if (this.editingDeadlineTime.length > 0) {
                    return {
                        ...task,
                        description: this.editingDescriptionText,
                        deadLine: this.editingDeadlineTime
                    }
                } else {
                    return {
                        ...task,
                        description: this.editingDescriptionText
                    }
                }    
            }
            return task
        })
        this.todosList = newTodosList
        this.editingDescriptionText = ""
        this.editingDeadlineTime = ""
        this.taskEditingId = null
        saveToLocalStorage(this.todosList)
    }
}


export default new TodosStore();