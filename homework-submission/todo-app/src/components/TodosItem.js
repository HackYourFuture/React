import React, { Component } from 'react';
import '../App.css';
import './Image.css'
import Image from './Image';
import { observer, inject } from 'mobx-react';

@inject('todostore')

@observer
class TodosItem extends Component {

    render() {

        const { id, description, deadline, done, index } = this.props;
        const { handleCheckBox, removeTodo } = this.props.todostore;
        const { editing, handleEditingDone, handleEditing, handleEditingChange } = this.props.todostore;


        let viewStyle = {};
        let editStyle = {};
        if (editing) {
            viewStyle.display = 'none';
        } else {
            editStyle.display = 'none';
        }

        return (
            <div className="comment">

                <input
                    className="checkbox"
                    onClick={() => handleCheckBox(id)}
                    defaultChecked={done}
                    key={index}
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
                    </h2>
                    <b>{description}</b>

                    <input
                        type="text"
                        name="description"
                        onKeyDown={(e) => handleEditingDone(e)}
                        onChange={(e) => handleEditingChange(e)}
                        style={editStyle}
                        defaultValue={description}
                        id={index} />

                    <h2 className="text">Dead Line:</h2>
                    <b>{deadline}</b>
                </span>
                <span className="removeStyle">
                    <button
                        name="remove"
                        onClick={() => removeTodo(id)}
                    >
                        Remove Todo
                    </button>
                </span>
                <span>
                    <button
                        style={viewStyle}
                        onClick={(e) => handleEditing()}
                    >
                        Edit Todo
                    </button>
                </span>


            </div>
        )
    }
};
export default TodosItem;