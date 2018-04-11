import React from "react";
import { inject, observer } from "mobx-react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";


@inject("todosStore")
@observer    
export default class App extends React.Component {
    
    render() {
        const { error } = this.props.todosStore;
        return (
            <section>
                {error ? <p className="errMsg"> {error} </p> : null}
                <AddTodo />
                <TodoList />
            </section>
        );
    }        
}
