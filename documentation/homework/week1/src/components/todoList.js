import React,{Component} from 'react';
import TodoListItem from './todoListItem';
import TodoAdd from './todoAdd';
import {inject,observer} from 'mobx-react'

@inject('todoStore')
@observer

class TodoList extends Component {

    render() {
        const todoList = this.props.listTodo;
        const todoListItem = todoList.map((element =>
             <TodoListItem 
                id={element.id} 
                description={element.description} 
                deadline={element.deadline} 
                done={element.done} 
                handleDoneClick={this.props.handleDoneClick}
                removeTodo = {this.props.removeTodo}
            />
        ));
        return (
            <div className='todoList'>
                {todoListItem}
                <TodoAdd addFunction= {this.props.addFunction}/>
            </div>
        );
    }
}

export default TodoList;