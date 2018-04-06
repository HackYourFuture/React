import {action, configure, observable, runInAction} from 'mobx'

configure({enforceActions: true})

const API_ROOT = 'https://hyf-react-api.herokuapp.com/todos'

class TasksListStore {

    @observable
    todoList = []

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
    getAPI = async () => {
        const res = await fetch(`${API_ROOT}`)
        const parsedRes = await res.json()
        console.log(parsedRes)

        runInAction(() => {
            this.todoList = parsedRes
        })

    }

    @action
    startEditing = (id) => {
        this.selectedToEdit = id
    }

    @action
    setDone = async (id) => {
        const task = this.todoList.find(task => task._id === id)
        const res = await fetch(`${API_ROOT}/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "done": !task.done
            })
        })
        const newTask = await res.json()
        runInAction(() => {
            const todoItems = this.todoList.map(task => {
                if (task._id === id) {
                    return newTask
                } else {
                    return task
                }
            })
            this.todoList = todoItems
        })
    }

    @action
    setNewTask = (event, field) => {
        this.newTask[field] = event.target.value
    }

    @action
    addNewTask = async (newTask, newDeadLine) => {

        await fetch(`${API_ROOT}/create`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "description": newTask,
                "deadline": newDeadLine
            })
        })
        this.getAPI()

        runInAction(() => {
            this.newTask.description = ''
            this.newTask.date = ''
        })
    }

    @action
    deleteTask = async (id) => {
        await fetch(`${API_ROOT}/${id}`, {
            method: 'DELETE',
        })

        this.getAPI()
    }

    @action
    updateTask = async (id, update) => {

        const res = await fetch(`${API_ROOT}/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                "description": update
            })
        })
        const newTask = await res.json()
        runInAction(() => {
            const todoItems = this.todoList.map(task => {
                if (task._id === id) {
                    return newTask
                } else {
                    return task
                }
            })
            this.todoList = todoItems
        })
        this.cancelEditing()
    }

    @action
    changeEditedTask = event => {
        this.editedTask = event.target.value
    }

    @action
    cancelEditing = () => {
        this.selectedToEdit = null
    }
}

export default new TasksListStore()