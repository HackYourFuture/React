import React, { Component } from 'react';
class todoItem extends Component {
    render() {
        return (
            <div className="firstItem">
            <li>
                <h4>Get out of bed,</h4>
                <h5> Wed Sep 13 2017</h5>
            </li>
            </div>    
        );
    }
}
export default class TodoList extends Component {
    render() {
        return (
            <div className="todoList">
                <ul>
                    <todoItem/>
                    <li>
                        <h4>Brush teeth,</h4>
                        <h5> Thu Sep 14 2017</h5>
                    </li>
                    <li>
                        <h4>Eat breakfast,</h4>
                        <h5> Fri Sep 15 2017</h5>
                    </li>
                </ul>
            </div>
        );
    }
} 