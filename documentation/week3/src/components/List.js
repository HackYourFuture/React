import React, { Component } from 'react';
import Task from './Task';

export default class List extends Component {
   
    render() {
        
        return (
            <div className='List'>
                
                {this.props.todos.map((todo, id) => {
                    
                    return (
                <Task
                    key={id}
                    id ={id}        
                    discription={todo.discription}       
                    deadline={todo.deadline}    
                    done={todo.done}   
                    handleClick={this.props.handleClick}   
                    handleDelete={this.props.handleDelete}        
                />
                )
                
                })}
                
            </div>
        );
    }
}