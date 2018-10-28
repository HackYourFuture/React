import React from "react";
import todo from '../todo.json'
import TodoItem from './TodoItem'
class TodoList extends React.Component {

    state = {
        todo: todo,
    }

    item = this.state.todo.map((item) => (
        <TodoItem
            id={item.id}
            description={item.description}
            deadline={item.deadline}
            done={item.done} />

    ));

    render() {
        const { firstName } = this.props;
        return (
            <div>
                <h1>{firstName + "'s To-do List"} </h1>
                <ul className='todoList'> {this.item}</ul>
            </div>
        )
    }
}

export default TodoList