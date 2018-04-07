import React, { Component } from 'react';
import Task from './Task';
import { observer, inject } from 'mobx-react'
@inject('todos')
@observer
export default class List extends Component {
   
    render() {
        const {
            todoList,
            toggleDone,
            createDiscription,
            createDeadline,
            addNewTask,
            deleteTask,
        } = this.props.todos
        return (
            <div className='List'>
                
                {todoList.map((todo,id) => (
                    
                <Task
                    key={todo.id}
                    id ={todo.id}        
                    discription={todo.discription}       
                    deadline={todo.deadline}    
                    done={todo.done}   
                    toggleDone={toggleDone}   
                    createDiscription={createDiscription} 
                    createDeadline={createDeadline}   
                    addNewTask={addNewTask}  
                    deleteTask={deleteTask}        
                />
                )
                
                )}
                
            </div>
        );
    }
}