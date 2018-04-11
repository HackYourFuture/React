import React from "react";
import { inject, observer } from "mobx-react";
import ListItem from "./ListItem";


@inject("todosStore")
@observer    
export default class TodoList extends React.Component {

    componentDidMount() {
        this.props.todosStore.getAllTodos();
    }

    render() {
        const { todos, doneCount } = this.props.todosStore;
        const listItems = todos.map(todo => (
            <ListItem
                key={todo._id}
                todo={todo}
            />
        ));
        return (
            <section>
                {todos.length
                    ?
                    <div className="todos-container">
                        {listItems}   
                        <p className="count">
                            Todos Completed: {doneCount} of {todos.length}
                        </p>
                    </div>
                    :
                    <p className="empty">
                        There are no items on this list
                    </p>} 
            </section>
        );
    }        
}
