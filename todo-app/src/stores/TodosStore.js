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
            this.getTodos()
        } else {
            alert("you should fill the values of Description and Deadline")
        }
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
    deleteAllCompleted = async  () => {
        const completedTodos = this.todosList.filter(task => task.done === true)
         await Promise.all(completedTodos.map( async task => {
            await  fetch(`${API_ROOT}/todos/${task._id}`, {
                method: "DELETE"
            })
        }))
        await this.getTodos();
    }

    @action
    onAddingTodo = (value,field) => {
        this.createTaskForm[field] = value
    }

    @action
    markAllTodos = async () => {
         await Promise.all(this.todosList.map( async task => {
            await fetch(`${API_ROOT}/todos/${task._id}`, {
                method: "PATCH",
                headers: {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({ done : true})
            })
        }))
        await this.getTodos()
    }

    @action
    unMarkAllTodos = async () => {
        await Promise.all(this.todosList.map( async task => {
          await  fetch(`${API_ROOT}/todos/${task._id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ done: false })
            })
        }))
        await this.getTodos()
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