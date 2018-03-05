import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todos from './component/todos';
import Header from "./component/header";
import JSON from "./todo.json";

class App extends Component {
    state = {
        todos: JSON
    }
    render() {
        if (this.state.todos.length > 0) {
            return (
                <div>
                    <Header />
                    <Todos todos={this.state.todos} />
                </div>
            )
        } else {
            return (
                <div>
                    <Header />
                    <h1>Todo List</h1>
                    <h3>No items...</h3>
                </div>
            )
        }
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
