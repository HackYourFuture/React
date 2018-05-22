import React,{Component} from 'react';
import {inject,observer} from 'mobx-react'

@inject('todoStore')
@observer

class TodoListItem extends Component {
    render() {
        const id =this.props.id;
        const description = this.props.description;
        const deadline = this.props.deadline;
        const done = this.props.done ? '◉' : '◎';
        return (
            <div className="mainContent">
                <div className="todoListItem">
                    <div className="description">
                        {description}
                    </div>
                    <div className="deadline">
                        {deadline}
                    </div>
                    <div className='doneClick'>
                        <span onClick = {()=> this.props.handleDoneClick(id)}>{done}</span> 
                    </div>
                    <div className='removeClick'>
                        <button onClick = {() => this.props.removeTodo(id)}>delete</button> 
                    </div>
                    <hr/>
                </div>
            </div>
        )
    }
}

export default TodoListItem;