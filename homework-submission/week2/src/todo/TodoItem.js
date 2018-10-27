import React from 'react';

export default function TodoItem(props) {
    const { description, deadline, done } = props;
    return (
        <li>
            <input type="checkbox" defaultChecked={done} onChange={props.onChange} />
            <span style={checkboxStyle(done)}>{description}, {deadline}</span>
        </li>
    );
}
function checkboxStyle(checked) {
    return {
        textDecoration: checked ? 'line-through' : 'none',
    }
}
