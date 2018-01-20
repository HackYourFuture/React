import React from 'react';
import TodoList from './TodoList';
//import {observer} from 'mobx-react';


export default class TodoApp extends React.Component {

    render() {
        return(
            <div className="TodoApp">
                
                <h1>TodoList</h1>
                <TodoList/>
    
            </div>

        );
    }
}

