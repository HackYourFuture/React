import { observable, action } from "mobx";
import Data from "../data/todos.json";
import uuid from 'uuid';

class TasksStore {
    @observable todos = Data;

    @action
    handleCheck = id => {
        const newTodos = this.todos.map(todo => {
            if (todo.id === id) {
                todo.done = !todo.done

            }
            return todo;
        });
        this.todos = newTodos;
    };

    @action
    handleAdd = (description, deadline) => {
        const newTodo = {
            id: uuid(),
            description,
            deadline: deadline.toLocaleDateString(),
            done: false
        }

        this.todos = [...this.todos, newTodo];
    }

    @action
    handleRemove = (id) => {
        const newTodos = this.todos.filter(todo => {
            return todo.id !== id
        });
        this.todos = newTodos;
    }
}

const store = new TasksStore();
export default store;
