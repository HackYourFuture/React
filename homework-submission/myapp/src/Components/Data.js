import React from 'react';
import Todos from './Todos.json';

class Data extends React.Component {

    state = {
        Todos
    }

    isTaskDone = (todo) => {
        todo.done = !todo.done;
        this.setState({
            Todos
        });
    }

    renderTodos() {
        if (this.state.Todos.length === 0) return <p className='noItems'>No items...</p>

        const textStyle = { textDecoration: 'line-through', backgroundColor: '#0455d8' }

        return <ul>
            {
                Todos.map((todo, id) => {

                    return (
                        <li key={id}>
                            <input checked={todo.done} type='checkbox' onChange={this.isTaskDone.bind(this, todo)} />
                            <span style={todo.done ? textStyle : null}>
                                {todo.description} , {todo.deadline}
                            </span>
                        </li>)
                })
            }
        </ul>
    }

    render() {
        return (
            <div className='items'>
                {this.renderTodos()}
            </div>
        )
    }
}

export default Data;