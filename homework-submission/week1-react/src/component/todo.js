import React from "react";
import changeDateFormat from '../util/change-format-date.js';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          done: true
        };
    }

    render () {
        const {text, date, done, changeDone, deleteTodo, index, editButton} = this.props;

        return(
                <li>
                    <label className= {done ? 'textFormat' : null}>
                        <input type="checkbox" className="checkbox" onChange={()=>changeDone(index)} defaultChecked={this.props.done}/>
                        {(text !== '') ? text : 'no input!'} - {changeDateFormat(date)}
                    </label>
                    <p className="deleteButton" onClick={()=>deleteTodo(index)}>X</p>
                    <p className="editButton" onClick={()=>editButton(index)}>edit</p>
                </li>
        )
    }
}

export default Todo;