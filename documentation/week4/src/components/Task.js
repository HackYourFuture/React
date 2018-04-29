import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
@inject('todos')
@observer
export default class Task extends Component {
   
    render() {

        return (
            <div className='Task'>
                <span
                    
                  style={
                    {
                        textDecoration: this.props.done ? 'line-through' : 'none',
                        color: this.props.done ? 'rgb(64, 18, 110)' : 'rgb(298, 100, 243)'
                    }
                    
                  }>
                    <h2>{this.props.discription}</h2>
                    <h3>{this.props.deadline}</h3>    

                </span>  
                
                <button
                    onClick=
                    {
                        () =>
                            this.props.todos.toggleDone(this.props.id)
                    }
                >
                   {this.props.done ? 'Undo' : 'Do it'}
                </button>
               
                <button
                    onClick=
                    {
                        () =>
                         this.props.todos.deleteTask(this.props.id)
                        
                    }    
                >    
                    Delete
                </button>
                
            </div>
        );
    }
}