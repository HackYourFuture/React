import React from 'react';
import TodoItem from './TodoItem';
import './index.css';

class TodoList extends React.Component {

    render() {
        const { todos, onChange } = this.props;
        const todoElements = todos.length !== 0 ? todos.map((todo) => (
            <TodoItem key={todo.id}
                description={todo.description}
                deadline={todo.deadline}
                done={todo.done}
                onChange={() => onChange(todo.id)}
            />
        )) : <p>the list is empty!</p>
        return (
            <div className="main">
                <h2 className="title">TODO List</h2>
                <ul className="list">
                    {todoElements}
                </ul>
            </div>
        );
    }
}

export default TodoList;