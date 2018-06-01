import React,{Component} from 'react';

class TodoListItem extends Component {
    render() {
        const id = this.props.id;
        const description = this.props.description;
        const deadline = this.props.deadline;
        const done = this.props.done ? '◉' : '◎';
        return (
            <div className="mainContent">
                <div className="content">
                    {description}
                     --->
                    {deadline}
                    <span className='doneClick' onClick = {()=> this.props.handleDoneClick(id)}>{done}</span>
                    <button className='removeClick' onClick = {() => this.props.removeTodo(id)}>✖</button> 
                    <hr/>              
                </div>
            </div>
        )
    }
}

export default TodoListItem;