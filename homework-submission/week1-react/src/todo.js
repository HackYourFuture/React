import React from "react";
import changeDateFormat from './change-format-date.js';

class Todo extends React.Component {

    render () {
        const {id, text, date, done, changeDone, index} = this.props;

        return(
                <li id={'todo'+id}>
                    <label className= {done ? 'textFormat' : null}>
                        <input type="checkbox" className="checkbox" onChange={()=>changeDone(index)} defaultChecked={done}/>
                        {text} - {changeDateFormat(date)}
                    </label>
                </li>
        )
    }
}

export default Todo;