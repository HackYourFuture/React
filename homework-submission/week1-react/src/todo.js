import React from "react";
import changeDateFormat from './change-format-date.js';

class Todo extends React.Component {
    render () {
        const {item, date} = this.props;
        return(
            <ul>
                <li>{item} - {changeDateFormat(date)}</li>
            </ul>
        )
    }
}

export default Todo;