import { extendObservable, action } from 'mobx';

export default class Store {
    constructor() {
        extendObservable(this, {
            todos: [],
            handleUpdateTodo: action((text, id) => {
                let UpdatedTodos = this.todos.map(todo => {
                    if (id === todo.id) {
                        return Object.assign({}, todo, { text: text })
                    }
                    return todo
                })
                this.todos = UpdatedTodos
            }),
            handleDeleteTodo: action((id) => {
                const newTodos = this.todos.filter(todo => { return todo.id !== id });
                this.todos = newTodos
            }),
            handleAddTodo: action((todo) => {
                const addedTodos = [...this.todos, todo]     //spreading
                this.todos = addedTodos
              })
        });
    }
}