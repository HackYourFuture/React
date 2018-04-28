import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div className='Content'>
                <strong>{this.props.myDate} </strong>{this.props.MyTask}
            </div>
        )
    }
}
export default TodoItem;