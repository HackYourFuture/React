import { observable, action, runInAction } from "mobx"





const createTaskFormDefault = {
    description: "",
    deadline: ""
}

const API_ROOT = 'https://hyf-react-api.herokuapp.com'

class TodosStore {

    @observable
    todosList = []

    @observable
    createTaskForm = createTaskFormDefault

    @observable
    editingDescriptionText = ""

    @observable
    editingDeadlineTime = ""

    @observable
    taskEditingId = null

    @action
    getTodos = async () => {
        const res = await fetch(`${API_ROOT}/todos`)
        const parsedRes = await res.json()
        console.log(parsedRes)
        runInAction(() => {
            this.todosList = parsedRes
        })
    }
    @action
    createTodo = async () => {
        if (this.createTaskForm.description && this.createTaskForm.deadline) {
            await fetch(`${API_ROOT}/todos/create`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(this.createTaskForm)
            })
            runInAction(() => {
                // reset the form
                this.createTaskForm = createTaskFormDefault
            })
        } else {
            alert("you should fill the values of Description and Deadline")
        }
        this.getTodos()
    }

    @action
    removeTodo = async taskId => {
        await fetch(`${API_ROOT}/todos/${taskId}`, {
            method: "DELETE",
        })
        this.getTodos()

    }

    @action
    toggleDone = async taskId => {
        const task = this.todosList.find(task => task._id === taskId)
        await fetch(`${API_ROOT}/todos/${taskId}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({ done: !task.done })
        })
        this.getTodos()

    }

    @action
    deleteAllCompleted =  () => {
        const newTodosList = this.todosList.filter(task => task.done === false)
        this.todosList = newTodosList


    }

    @action
    addingDescription = value => {
        this.createTaskForm.description = value
    }

    @action
    addingDeadline = value => {
        this.createTaskForm.deadline = value
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

    }

    @action
    onChangeDescriptionText = (value) => {
        this.editingDescriptionText = value
    }

    @action
    onChangeDeadlineTime = value => {
        this.editingDeadlineTime = value
    }

    @action
    enableEditMode = (taskId) => {
        this.taskEditingId = this.todosList.find(task => task._id === taskId)._id
        this.editingDescriptionText = this.todosList.find(task => task._id === taskId).description
        this.editingDeadlineTime = this.todosList.find(task => task._id === taskId).deadline.slice(0, 10)
    }

    @action
    saveEdited = async (taskId) => {
        if (this.editingDescriptionText.length > 0) {
            await fetch(`${API_ROOT}/todos/${taskId}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    description: this.editingDescriptionText,
                    deadline: this.editingDeadlineTime
                })
            })
        }
        runInAction(() => {
            this.editingDescriptionText = ""
            this.editingDeadlineTime = ""
            this.taskEditingId = null
        })
        this.getTodos()
    }
    @action 
    cancelEditing = () => {
        this.editingDescriptionText = ""
        this.editingDeadlineTime = ""
        this.taskEditingId = null
    }
}


export default new TodosStore();