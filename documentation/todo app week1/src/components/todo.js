import React, { Component } from 'react';
import todoItem from './components/todoItem';
export default class TodoList extends Component {
    props = {
        date: this.props.date
    };

    render() {
      
        return (
            <div className="todoList">
                <ul>
                    <todoItem/>
                    <li>
                        <h4>Brush teeth,</h4>
                        date = "Fri Sep 19 2017"
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