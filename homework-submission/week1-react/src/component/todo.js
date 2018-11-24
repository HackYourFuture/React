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
        const {id, text, date, done, changeDone, deleteTodo, editButton} = this.props;

        return(
                <li>
                    <label className= {done ? 'textFormat' : null}>
                        <input type="checkbox" className="checkbox" onChange={()=>changeDone(id)} defaultChecked={this.props.done}/>
                        {(text !== '') ? text : 'no input!'} - {changeDateFormat(date)}
                    </label>
                    <p className="deleteButton" onClick={()=>deleteTodo(id)}>X</p>
                    <p className="editButton" onClick={()=>editButton(id)}>edit</p>
                </li>
        )
    }
}

export default Todo;