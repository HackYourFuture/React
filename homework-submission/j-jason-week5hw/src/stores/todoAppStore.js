import { action, runInAction, observable } from 'mobx';
import moment from 'moment';

const API_ROOT = "https://hyf-react-api.herokuapp.com";
const initialValue = {
    description: '',
    deadline: moment(),
};
class TodoAppStore {

    @observable
    listTodo = [];

    @observable
    defaultValue = initialValue;

    @action
    getTodos = async () => {
        try {
            const res = await fetch(`${API_ROOT}/todos`);
            const parsedResponse = await res.json();
            console.log(parsedResponse);
            runInAction(() => {
                this.listTodo = parsedResponse;
            })

        }
        catch (error) {
            console.log(error);
        }
    }

    @action
    onChangeState = (field, value) => {
        const currentState = this.defaultValue;
        currentState[field] = value;
        this.defaultValue = currentState;
    }

    @action
    handleDateStateChange = (element) => {
        this.defaultValue.deadline = element;
    }

    @action
    onAddFunction(_id, description, deadline, done) {
        this.addFunction(_id, description, deadline, done);
        this.defaultValue = {
            description: '',
            deadline: moment(),
        }
    }

    @action
    addFunction = async (_id, description, deadline, done) => {
        await fetch(`${API_ROOT}/todos/create`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.defaultValue)
        })
        this.getTodos();
    }

    @action
    handleDoneClick = async (_id) => {
        const todoElement = this.listTodo.find(todoElement => todoElement._id === _id);
        this.listTodo = this.listTodo.map(element => {
            if (element._id === _id) {
                return {
                    ...todoElement,
                    done: !element.done,
                }
            }
            return element;
        })
        await fetch(`${API_ROOT}/todos/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                done: !todoElement.done,
            })
        })
        this.getTodos();
    }

    @action
    removeTodo = async (_id) => {
        this.listTodo = this.listTodo.filter(todo => todo._id !== _id)
        await fetch(`${API_ROOT}/todos/${_id}`, {
            method: "DELETE",
        })
        this.getTodos();
    }
}

export default new TodoAppStore()