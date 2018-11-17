import React from 'react';
import TodoItem from './TodoElement';
import { observer, inject } from 'mobx-react';

@inject('todos')
@observer
class todosList extends React.Component {
    render() {
        const { todos } = this.props.todos;
        const list = todos.map((item) => <TodoItem todo={item} />);
        return (
            <div id='todoList'>
                {list.length === 0 ? <p className='noTodo'> All Todos is done...</p> : <ul>{list}</ul>}
            </div>
        );
    }
}

export default todosList;