import React from 'react';
import TodoItem from './TodoItem';


export default class Todolist extends React.Component {
    deleteTodo(id) {
        this.props.onClick(id);
    }

    updateTodo(text, id){
        this.props.onUpdate(text, id);
    }

    render() {
        let todoItems = this.props.todos.map(todo => {
            return (
                <TodoItem 
                onClick={this.deleteTodo.bind(this)} 
                onUpdate={(text) => this.updateTodo(text, todo.id)} 
                key={todo.id} 
                todo={todo} />
            );
        });
        return (
            <div>
                {todoItems}
            </div>
        );
    }
}

