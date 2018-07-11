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

        const { _id, description, deadline, done } = this.props;
        const { toggleCheckbox, removeTodo, editing, startEditing,
            changeEditedTask,
            editedTask,
            updateTask,
            cancelEditing } = this.props.todostore;
        const doneStyle = { textDecoration: 'line-through', color: 'red' }
        return (
            <div>
                <li className="comment" id={_id}>

                    <input
                        className="checkbox"
                        onClick={() => toggleCheckbox(_id)}
                        defaultChecked={done}
                        type="checkbox" />

                    <Image className="App-image" />



                    <span
                        style={done ? doneStyle : {}}
                    >
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