import { observable, action } from "mobx"
import moment from "moment"

import todosList from "../data/myTodoList.json"

const createTaskFormDefault = {
    description: "",
    deadLine: ""
}

class TodosStore {
    
    @observable
    todosList = todosList

    @observable
    createTaskForm = createTaskFormDefault

    @observable
    editMode = false
    
    @observable
    editingText = ""    

    @action 
    createTodo = () => {
        const ids = this.todosList.map(task => task.id)
        const newId = this.todosList.length > 0 ? Math.max(...ids) + 1 : 1
        const newTask = {
            ...this.createTaskForm,
            id: newId,
            creatingDate: moment().format("llll")
        }
        this.todosList = [
            ...this.todosList,
            newTask
        ]
        this.createTaskForm = createTaskFormDefault
    }

    @action
    removeTodo = id => {
        this.todosList = this.todosList.filter(task => task.id !== id)
    }

    @action
    toggleDone = id => {
        const newTodosList = this.todosList.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    done : !task.done
                }
            }
            return task
        })
        this.todosList = newTodosList
    }

    @action 
    deleteAllCompleted = () => {
        const newTodosList = this.todosList.filter(task => task.done === false)
        this.todosList = newTodosList
    }

    @action 
    editingDescription = (e) => {
        this.createTaskForm.description = e.target.value
    } 

    @action
    editingDeadline = (e) => {
        this.createTaskForm.deadLine = moment(e.target.value).format('llll')
    } 

    @action
    editingTodo = (id, newDescription) => {
        this.todosList = todosList.map(task => {
            if (task.id === id) {
                task.description = newDescription
            }
            return task;
        })
    }
    @action
    markAllTodos = () => {
        this.todosList = this.todosList.map(task => {
           return task.done = true
        })
    }

    @action
    unMarkAllTodos = () => {
        this.todosList = this.todosList.map(task => {
           return task.done = false
        })
    }
    @action 
    onChangeEditingText = (e) => {
        this.editingText = e.target.value
    }

    @action
    enableEditMode = () => {
        this.editMode = true
    }

    @action
    saveEdited = (id) => {
        this.todosList = this.todosList.map(task => {
            if (task.id === id) {
                task.description = this.editingText
            }
            return task
        })
        this.editMode = false
        this.editingText = ""
    }
}


export default new TodosStore();