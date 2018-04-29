import React, { Component } from 'react';

export default class TodoItems extends Component{
    
    
    render() {
        const { checkStatus } = this.props;
        let { todoId, todoTask, taskDate, todoStatus } = this.props;
        return (

            <div className='listItems'>
                <hr />
                <h2>Number : {todoId}</h2>
                <h2><strong> Task : {todoTask}</strong></h2>
                <h3><strong> {taskDate} </strong></h3>
                <h3><strong> {todoStatus} </strong></h3>
                <div
                    onClick={() => checkStatus(todoId)}
                >
                    {todoStatus ? <span>♥</span> : <span>♡</span>}    

                </div>

                <hr />
            </div>
        );
    }
}