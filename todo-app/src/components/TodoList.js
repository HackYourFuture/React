import React from "react";
import { inject, observer } from "mobx-react";
import ListItem from "./ListItem";


@inject("todoItems")
@observer    
export default class TodoList extends React.Component {

    render() {
        const { todoItems } = this.props;
        const { todos, doneCount } = todoItems;
        
        return (
            <section>
                { todos.length
                    ?
                    <div className="todos-container">
                        { todos.map(todo => (
                            <ListItem
                                key={todo.id}
                                todo={todo}
                            />
                        )) }   
                        <p className="count">
                            Todos Completed: {doneCount} of {todos.length}
                        </p>
                    </div>
                    :
                    <p className="empty">
                        There are no items on this list
                    </p> } 
            </section>
        );
    }        
}
