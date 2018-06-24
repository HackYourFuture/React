import React, { Component } from 'react';
import '../App.css';
import './Image.css'
import Image from './Image';
import { observer, inject } from 'mobx-react';

@inject('todostore')

@observer
class TodosItem extends Component {

    render() {

        const { id, description, deadline, done } = this.props;
        const { handleCheckBox, removeTodo } = this.props.todostore;

        return (
            <div className="comment">

                <input
                    className="checkbox"
                    onClick={() => handleCheckBox(id)}
                    defaultChecked={done}
                    type="checkbox" />
                <Image className="App-image" />
                <span
                    style={done
                        ? {
                            textDecoration: 'line-through',
                            color: 'red'
                        }
                        : {}}>
                    <h2 className="text">Task:
                    </h2> {description}
                    <h2 className="text">Dead Line:</h2>
                    <b>{deadline}</b>
                </span>
                <span className="removeStyle">
                    <button onClick={() => removeTodo(id)}>
                        Remove Todo
                    </button>
                </span>
                <span>

                </span>

            </div>
        )
    }
};
export default TodosItem;