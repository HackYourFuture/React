import React, { Component } from 'react';
import '../App.css';
import '../components/Image.css'
import Image from '../components/Image';

class TodosItem extends Component {

    render() {

        let { id, description, deadline, done } = this.props.todo;
        let { toggleDone, removeTodo } = this.props;
        return (
            <div className="comment">
                <input
                    className="checkbox"
                    onClick={() => toggleDone(id)}
                    defaultChecked={done}
                    type="checkbox" />
                <Image className="App-image" />
                <span
                    style={done
                        ? {
                            textDecoration: 'line-through'
                        }
                        : {}}>
                    <h2 className="text">Task:
                    </h2>
                    <b>{description}</b>
                </span>

                <span
                    style={done
                        ? {
                            textDecoration: 'line-through'
                        }
                        : {}}>
                    <h2 className="text">Dead Line:</h2>
                    <b>{deadline}</b>
                </span>
                <span className="removeStyle">
                    <button onClick={() => removeTodo(id)}>
                        Remove Todo
                    </button>
                </span>
                <span>
                    <button>
                        Edit Todo
                    </button>
                </span>

            </div>
        )
    }
};
export default TodosItem;