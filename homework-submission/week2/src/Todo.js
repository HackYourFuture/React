import React, { Component } from 'react';

class Todo extends Component {
    render() {
        let { todoId, text, date, status, isDoneCheck } = this.props;
        return (

            <div className='listItems' >
                <div onClick={() => isDoneCheck(todoId)}>
                    {status ? <span>☑️</span> : <span>🔲</span>}

                </div>
                <div style={status ? { textDecoration: 'line-through' } : {}}>
                    <h2>{todoId}</h2>
                    <h2><strong> {text}</strong></h2>
                    <h4><strong> {date} </strong></h4>
                    <h4><strong> {status} </strong></h4>
                </div>
            </div>
        );
    }
}
export default Todo;