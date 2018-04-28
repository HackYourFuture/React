import React,{Component} from 'react';

class TodoListItem extends Component {
    render() {
        const id = this.props.id;
        const description = this.props.description;
        const deadline = this.props.deadline;
        const done = this.props.done ? '●' : '○';
        return (
            <div className="mainContent">
                <div className="content">
                    
                    {description},
                    {deadline}
                    <span className='doneClick' onClick = {()=> this.props.handleDoneClick(id)}>{done}</span>
                </div>
            </div>
        )
    }
}

export default TodoListItem;