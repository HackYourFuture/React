import React from "react";
import { observer, inject } from "mobx-react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";  

@inject("todos")
@observer    
export default class App extends React.Component {
    render() {

        const { todos, doneCount } = todoItems;
    
        return (
            <section>
                <AddTodo todoItems={todoItems} />
                {todos.length
                    ?
                    <div className="todos-container">
                        {todos.map(todo => (
                            <TodoItem
                                todoItems={todoItems}
                                key={todo.id}
                                todo={todo}
                                id={todo.id}
                                description={todo.description}
                                deadline={todo.deadline}
                                done={todo.done}
                            />
                        ))}
                        <p className="count">
                            Todos Completed: {doneCount} out of {todos.length}
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

export default App;
