import React from 'react';
import TodoItem from './TodoItem';
import TodoStatus from './TodoStatus';


export default class Todolist extends React.Component{
    
    render() {
        const { text, status } = this.props.todo;        
        return (
          <div className='todo'>
                <div className='item'>
                    <TodoItem text={text} />
                </div>
                <div className='done'>
                    <TodoStatus status={status} />
                </div>
            </div>
        )
      }
    }