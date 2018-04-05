import React from "react";
import { inject, observer } from "mobx-react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

@inject("todosStore")
@observer    
export default class App extends React.Component {
    render() {
        const { error } = this.props.todosStore;
        const errMessage = (
            <p className="errMsg">
                * There was a problem processing your request. Please try again.
            </p>
        );
        
        return (
            <section>
                {error ? errMessage : null}
                <AddTodo />
                <TodoList />
            </section>
        );
    }        
}

