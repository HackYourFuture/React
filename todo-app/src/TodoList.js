import React from 'react';
import TodoItem from './TodoItem';
import TodoStatus from './TodoStatus';


export default class Todolist extends React.Component {

    render() {
        return (
            <div className='todo'>
                <div className='item'>
                    <ul><TodoItem text={this.props.text} /></ul>
                </div>
                <div className='done'>
                    <TodoStatus />
                </div>
            </div>
        )
    }
}