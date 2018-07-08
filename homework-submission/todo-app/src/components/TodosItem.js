import React, { Component } from 'react';
import '../App.css';
import './Image.css'
import Image from './Image';
//import uuid from 'uuid/v4';
import { observer, inject } from 'mobx-react';

@inject('todostore')

@observer
class TodosItem extends Component {


    render() {

        const { _id, description, deadline, done, index } = this.props;
        const { handleCheckBox, removeTodo } = this.props.todostore;
        const { editing } = this.props.todostore;
        const { startEditing,
            selectedToEdit,
            changeEditedTask,
            editedTask,
            updateTask,
            cancelEditing, } = this.props.todostore;

        let viewStyle = {};
        let editStyle = {};
        if (editing) {
            viewStyle.display = 'none';
        } else {
            editStyle.display = 'none';
        }

        return (
            <div>
                <li className="comment" id={_id}>

                    <input
                        className="checkbox"
                        onClick={() => handleCheckBox(_id)}
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
                        <h2 className="text">Task:</h2>
                        <b>{description}</b>
                        <h2 className="text">Dead Line:</h2>
                        <b>{deadline}</b>
                    </span>
                    <span className="removeStyle">
                        <button
                            name="remove"
                            onClick={() => removeTodo(_id)}
                        >
                            Remove Todo
                    </button>
                    </span>
                    <div>

                    </div>
                    <div>
                        {selectedToEdit === _id}

                        {(editing) ?
                            <button onClick={() => startEditing(_id)}>Edit Todo</button>
                            :
                            <div>
                                <input type="text" onChange={e => changeEditedTask(e)} value={editedTask}></input>
                                <button onClick={() => updateTask(_id, editedTask)}>Save</button>
                                <button onClick={() => cancelEditing()}>Cancel</button>
                            </div>
                        }


                    </div>

                </li>
            </div >
        )
    }
};
export default TodosItem;