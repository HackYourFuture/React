import {action,configure,observable} from 'mobx'
import moment from 'moment'

import {loadFromLocalStorage,saveToLocalStorage} from '../localStorage'
import todoList from '../todoList.json'

configure({
    enforceActions: true
})



class TasksListStore {

    @observable
    todoList = loadFromLocalStorage() || todoList


    @observable
    selectedToEdit = null

    @observable
    editedTask = ''

    @observable
    newTask = {
        description: '',
        date: '',
    }

    @action
    selected = (id) => {
        const todoItems = this.todoList.map(task => {
            if (task.id === id) {
                return {
                    "id": task.id,
                    "description": task.description,
                    "deadline": task.deadline,
                    "selected": !task.selected,
                    "isDone": task.isDone,
                    "timeout": task.timeout
                }
            } else {
                return task
            }
        })
        this.todoList = todoItems
        saveToLocalStorage(this.todoList)
    }

    @action
    setDone = (id) => {
        const todoItems = this.todoList.map(task => {
            if (task.id === id) {
                return {
                    "id": task.id,
                    "description": task.description,
                    "deadline": task.deadline,
                    "selected": task.selected,
                    "isDone": !task.isDone,
                    "timeout": task.timeout
                }
            } else {
                return task
            }
        })
        this.todoList = todoItems
        saveToLocalStorage(this.todoList)
    }

    @action
    addNewTask = (newTask, newDeadLine) => {

        const todoItems = this.todoList
        const id = this.todoList.map(task => task.id)
        const newId = this.todoList.length > 0 ? Math.max(...id) + 1 : 1
        todoItems.push({
            "id": newId,
            "description": newTask.toUpperCase(),
            "deadline": newDeadLine,
            "selected": false,
            "isDone": false,
            "timeout": this.setTimeout(newDeadLine)
        })
        this.todoList = todoItems
        this.newTask.description = ''
        this.newTask.date = ''
        saveToLocalStorage(this.todoList)
    }

    @action
    setNewTask = (event, field) => {
        this.newTask[field] = event.target.value
    }

    @action
    setTimeout = (deadline) => {
        let taskDeadline = moment(deadline).toObject()
        if (moment([taskDeadline.years, taskDeadline.months, taskDeadline.date]).diff(moment(), 'days') < 0) {
            console.log('true')
            return true
        } else {
            console.log('false')
            return false
         }

    }

    @action
    deleteTask = (id) => {

        const todoItems = this.todoList.filter(task => task.id !== id)
        this.todoList = todoItems
        saveToLocalStorage(this.todoList)
    }

    @action
    selectToEdit = (id) => {
        this.selectedToEdit = id
        this.editedTask = ''
    }

    @action
    updateTask = (id, update) => {
        const todoItems = this.todoList.map(task => {
            if (task.id === id) {
                return {
                    "id": task.id,
                    "description": update,
                    "deadline": task.deadline,
                    "selected": task.selected,
                    "isDone": task.isDone,
                    "timeout": task.timeout
                }
            } else {
                return task
            }
        })
        this.todoList = todoItems
        this.selectToEdit(null)
        saveToLocalStorage(this.todoList)
    }

    @action
    changeEditedTask = event => {
        this.editedTask = event.target.value
    }

}

export default new TasksListStore()