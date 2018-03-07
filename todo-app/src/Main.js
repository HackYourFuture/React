import React from 'react';
import ListItem from "./List-Item";
import todoItems from "./todos.json";
import AddTodo from "./Add-Todo";


export default class Main extends React.Component {

    render() {
        return (
            <section id="wrapper">
                <h2>Todo list</h2>

                {todoItems.map(todo => {
                    return <ListItem
                        key={todo.id}
                        todoItem={todo} />
                }
                )}
                
                <AddTodo />
            </section>
        );
    }
}
