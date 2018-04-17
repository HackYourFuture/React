import React,{Component} from 'react';
import TodoListItem from './todoListItem';

class TodoList extends Component {
    render() {
        const todoList = [
            {'description':'Get out of bed','deadLine':'Wed Sep 13 2017'},
            {'description':'Brush teeth','deadLine':'Thu Sep 14 2017'},
            {'description':'Eat breakfast','deadLine':'Fri Sep 15 2017'},
        ];
        const todoListItem = todoList.map((data,index) =>
             <TodoListItem description={data.description} deadLine={data.deadLine}/>
        );
        return (
            <div className='content'>
                {todoListItem}
            </div>
        );
    }
}

export default TodoList;