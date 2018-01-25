import React from 'react';
import TodoList from './TodoList';
import TodoForm from './todoForm';

export default class TodoApp extends React.Component {

    render() {
        return(
            <div className="TodoApp">
                <div className="Header">
                  <h1 className="Title">TodoList</h1>
                </div>
                
                <div className="TodoList">
                   <TodoList />
                   <TodoForm />
                </div>
            </div>
        );
    };
};

