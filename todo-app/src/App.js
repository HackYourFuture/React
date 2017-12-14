import React from 'react';
import {AppTask} from './AppTask';
import {AppDate} from './AppDate';

export class Todo extends React.Component{
    Constructor(){
        
    }
    
    render(){
        return (
            <div className = "todoApp">
            <h1>Todo App</h1>
            <AppDate tasks={this.props.tasks}/>
            <AppTask tasks={this.props.tasks}/>
            </div>
        );
    }
}

export default Todo;
