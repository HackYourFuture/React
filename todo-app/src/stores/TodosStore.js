import todos from "../data/todos.json";
import { observable, action, configure } from "mobx";

configure({ enforceActions: true });


const TodoItems = observable({

    todos,

    get nextId() {
        if (!this.todos.length) {
            return 1;
        }
        const todoIDs = this.todos.map(todo => todo.id);
        return Math.max(...todoIDs) + 1
    },

    addTodo: action((id, description, deadline) => {
        if (description && deadline) {
            const newTodo = {
                id,
                description,
                deadline,
                done: false, 
                editMode: false
            }
            TodoItems.todos.push(newTodo);
        }
    }),

    toggleCheck: action(todoID => {
        TodoItems.todos = TodoItems.todos.map(todo => (
            todo.id === todoID
                ? { ...todo, done: !todo.done }
                : todo
        ));
    }),

    toggleEdit: action(todoID => {
        TodoItems.todos = TodoItems.todos.map(todo => (
            todo.id === todoID
                ? { ...todo, editMode: !todo.editMode }
                : todo
        ));
    }),

    saveUpdate: action((todoID, description, deadline) => {
        if (description && deadline) {
            TodoItems.todos = TodoItems.todos.map(todo => (
                todo.id === todoID
                    ? { ...todo, description, deadline }
                    : todo
            ));
            TodoItems.toggleEdit(todoID);
        }   
    }),

    deleteTodo: action(todoID => {
        TodoItems.todos = TodoItems.todos.filter(todo => (
            todo.id !== todoID
        ));
    }),

    get doneCount() {
        return this.todos.filter(todo => todo.done).length;
    }
}) 

export default TodoItems;
