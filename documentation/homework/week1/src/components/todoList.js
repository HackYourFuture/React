import React,{Component} from 'react';
import TodoListItem from './todoListItem';
import TodoAdd from './todoAdd';

class TodoList extends Component {

    render() {
        const todoList = this.props.listTodo;
        const todoListItem = todoList.map((data,index) =>
             <TodoListItem 
                id={data.id} 
                description={data.description} 
                deadline={data.deadline} 
                done={data.done} 
                handleDoneClick={this.props.handleDoneClick}
                removeTodo = {this.props.removeTodo}
            />
        );
        return (
            <div className='content'>
                {todoListItem}
                <TodoAdd addFunction= {this.props.addFunction}/>
            </div>
        );
    }
}

export default TodoList;