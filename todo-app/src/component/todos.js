import React from 'react';
import TodoItems from './todoItems';

const Todos = ({ todos }) => {

    const todosItem = todos.map((item) => {
        return (
            <TodoItems key={item.id} items={item} />
        )
    })
    return (
        <div className="todosContainer">
            <h3>Todo-List</h3>
            <ul className="todosItem">
                {todosItem}

            </ul>
        </div>
    );
}

export default Todos;
 
