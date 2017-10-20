import React, {Component}  from 'react';
import TodoItem from './TodoItem';
import TodoStatus from './TodoStatus';
import TodoNumber from './TodoNumber';



export default class TodoList extends Component {
    
    render() {
        const { id, text, status } = this.props.todo;     
        return (<div>
                    <TodoNumber id={id} />            
                    <TodoItem text={text} /> 
                    <TodoStatus status={status} /><br/>
              </div>
        )
    }
}