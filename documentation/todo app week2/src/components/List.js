import React, { Component } from 'react';
import Task from './Task';

export default class List extends Component {
    state = {
        todos: [
            {
        
                "id":1,
                "discription": "Get out of bed",
                "deadline": "2017-09-11",
                "done": true
            },
            {
                "id": 2,
                "discription": "Brush teeth",
                "deadline": "2017-09-10",
                "done": false
            },
            {
                "id": 3,
                "discription": "Eat breakfast",
                "deadline": "2017-09-09",
                "done": false
            }
        ]
    }

    handleClick = (id) => {
        const todos = this.state.todos;
        todos[id].done = !todos[id].done;
        this.setState({ todos });
    }
   
    render() {
        return (
            <div className='List'>
                
                {this.state.todos.map((todo, id) => {
                    
                    return (
                <Task
                    key={id}
                    id ={id}        
                    discription={todo.discription}       
                    deadline={todo.deadline}    
                    done={todo.done}   
                    handleClick={this.handleClick}           
                />
                )
                
                })}
                
            </div>
        );
    }
}