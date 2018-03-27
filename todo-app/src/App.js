import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

 
export default class App extends React.Component {
    render() {
        return (
            <section>
                <AddTodo />
                <TodoList />
            </section>
        );
    }        
}

