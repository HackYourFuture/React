import { action, runInAction, observable, computed } from 'mobx';
//import todoList from '../components/todos.json';
import moment from 'moment';
import '../App.css';

const API_ROOT = "https://hyf-react-api.herokuapp.com";
const initialValue = {
    description: '',
    deadline: moment().format('YYYY-MM-DD')
};

class TodoStore {

    @observable
    listTodo = []

    @observable
    emptyListTodo = {}

    @observable
    defaultValue = initialValue

    @observable
    editing = false


    @computed
    get completedTodosCount() {
        return this.listTodo.filter(
            todo => todo.done === true
        ).length;
    }
    @computed
    get todosCount() {
        return this.listTodo.length;
    }

    @action
    onChanging = (index, value) => {
        const newValue = this.defaultValue;
        newValue[index] = value;
        this.defaultValue = newValue;

    };


    @action
    handleEditing = () => {

        this.editing = true;

    }

    @action
    handleEditingDone = (e) => {
        // keyCode=13 is firing when you click ENTER
        if (e.keyCode === 13) {

            this.editing = false;
        }

    }

    @action
    handleEditingChange = (e) => {

        let field = e.target.id;
        this.listTodo[field].description = e.target.value;

    }

    //Week5 Actions

    @action
    getTodos = async () => {
        try {
            const res = await fetch(`${API_ROOT}/todos`);
            const parsedResponse = await res.json();
            runInAction(() => {
                this.listTodo = parsedResponse;
            })

        }
        catch (error) {
            console.log(error);
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
    onAddFunction(_id, description, deadline, done) {
        this.addFunction(_id, description, deadline, done);
        this.defaultValue = {
            description: '',
            deadline: moment().format('YYYY-MM-DD')
        }
    }

    @action
    handleCheckBox = async (_id) => {
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
export default new TodoStore();
