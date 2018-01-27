import React from 'react';
import { Provider } from 'mobx-react';
import { todoStore } from './stores';
import TodoList from './TodoList';

export default class App extends React.Component {
    render() {
        return (
            <Provider todoStore={todoStore}>
                <div className="App">
                    <h1>Todo App</h1>
                    <TodoList />
                </div>
            </Provider>
        )
    }
}


