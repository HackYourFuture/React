import { action, observable } from 'mobx';
import uuid from 'uuid/v4';
import todoS from '../data/todoS.json';
import moment from 'moment';

const defaultState = {
    description: '',
    deadline: '',
    done: false
}

class TodoItemsStore {
    
    @observable
    todoS = todoS;
    
    @observable
    defaultValue = defaultState;
    
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
    handleAddTodo = (fields) => {
        const newTodo = {
            ...fields,
            id: uuid(),
            createdAt: moment().format('DD-MM-YYYY')
        }
        this.todoS = [
                ...this.todoS,
                newTodo
            ]
    }

    @action
    handleRemoveTodo = (id) => {
        this.todoS= this.todoS.filter(todo => todo.id !== id)
    }

    @action
    handleToggleCheck = todoId => {
        const newTodoList = this.todoS.map
            (todo => {
                if (todo.id === todoId) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo
            })
        this.todoS = newTodoList;
    }
}

export default new TodoItemsStore();