import { observable, action } from 'mobx';
import todosData from './todo.json';


class TodosStore {
    @observable todos = todosData;

    @action deleteTodo = (Id) => {
        const todos = this.todos.filter(todo => {
            return todo.id !== Id
        });
        this.todos = todos;
    }


    @action checkBoxHandler = (id) => {
        const newTodos = this.todos.map(item => {
            if (item.id === id) {
                return {
                    ...item, done: !item.done
                };
            }
            return item;
        });
        this.todos = newTodos;
    }


    @action addNewTodo = (todo) => {
        if (this.todos.length === 0) {
            todo.id = 1
        } else {
            todo.id = (this.todos[this.todos.length - 1].id + 1)
        }
        this.todos = [...this.todos, todo]
    }
}

const todos = new TodosStore();

export default todos;