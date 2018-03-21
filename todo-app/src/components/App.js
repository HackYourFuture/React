import React from "react";
import { observer } from "mobx-react";
import ListItem from "./ListItem";
import AddTodo from "./AddTodo";


const App = observer(({ todoItems }) => {

    const { todos, doneCount } = todoItems;
    return (
        <section>
            <AddTodo todoItems={todoItems} />
            {
                todos.length
                ?
                <div className="todos-container">
                    {todos.map(todo => (
                        <ListItem
                            todoItems={todoItems}
                            key={todo.id}
                            todo={todo}
                        />
                    ))}
                    <p className="count">
                        Todos Completed: {doneCount} of {todos.length}
                    </p>
                </div>
                :
                <p className="empty">
                    There are no items on this list
                </p>
                }
        </section>
    );  
})

export default App;
