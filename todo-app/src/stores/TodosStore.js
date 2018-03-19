import todoItems from "./data/todos.json";
import { observable, action } from "mobx";

const todosStore = observable({

    todos: todoItems,

    get nextId() {
        const todoIds = todosStore.todos.map(todo => todo.id);
        return Math.max(...todoIds) + 1
    },

    addTodo: action((id, description, deadline) => {
        const newTodo = {
            id, description, deadline, done: false
        }
        return todosStore.todos.push(newTodo);
    }),

    toggleCheck: action(todoId => {
        todosStore.todos = todosStore.todos.map(todo => (
            todo.id === todoId
                ? { ...todo, done: !todo.done }
                : todo
        ));
    }),

    saveUpdate: action((todoId, description, deadline) => {
        todosStore.todos = todosStore.todos.map(todo => (
            todo.id === todoId
                ? {
                    ...todo,
                    description,
                    deadline,
                }
                : todo
        ));
    }),

    deleteTodo: action(todoId => {
        // const index = todosStore.todos.findIndex(todo => (
        //     todo.id === todoId
        // ));
        
        // todosStore.todos = [
        //     ...todosStore.todos.slice(0, index),
        //     ...todosStore.todos.slice(index + 1)
        // ]; 
        
        const todoItems = todosStore.filter(todo => todo.id !== todoId);

        todosStore.todos = todoItems;

    }),

    get doneCount() {
        return this.todos.filter(todo => todo.done).length;
    }
}) 

export default todosStore;
