import {action,observable,runInAction} from 'mobx'
import moment from 'moment';

const defaultState = {
    description: '',
    deadline: moment()
}

const API_ROOT = 'https://hyf-react-api.herokuapp.com'

class TodoItemsStore {

    @observable
    todoS = [];

    @observable
    defaultValue = defaultState;

    @action
    getTodos = async () => {
        try {
            const res = await fetch(`${API_ROOT}/todos`)
            const parsedResponse = await res.json();
            runInAction(() => {
                this.todoS = parsedResponse
            })
        } catch (Error) {
            throw Error;
        }
    }

    @action
    handleFieldChange = (event, field) => {
        this.defaultValue[field] = event.target.value;
    }

    @action
    addTodo = () => {
        this.handleAddTodo(this.defaultValue)
        this.defaultValue = defaultState;
    }

    @action
    handleAddTodo = async () => {
        await fetch(`${API_ROOT}/todos/create`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.defaultValue)
        })
        this.getTodos()
    }

    @action
    handleDateChange = (element) => {
        this.defaultValue.deadline = element;
    }

    @action
    handleRemoveTodo = async todoId => {
        await fetch(`${API_ROOT}/todos/${todoId}`, {
            method: 'DELETE'
        })
        this.getTodos()
    }

    @action
    handleToggleCheck = async todoId => {
        const todo = this.todoS.find(todo => todo._id === todoId)
        await fetch(`${API_ROOT}/todos/${todoId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                done: !todo.done
            })
        })
        this.getTodos()
    }
}
export default new TodoItemsStore();