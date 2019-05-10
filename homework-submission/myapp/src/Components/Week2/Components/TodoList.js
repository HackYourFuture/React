import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    const {
      Todo_Id,
      Todo_Description,
      Todo_Deadline,
      Todo_Status,
      checkStatus,
      removeItem,
    } = this.props;
    return (
      <div onClick={() => checkStatus(Todo_Id)} class="listContent">
        <span style={Todo_Status ? { textDecoration: 'line-through' } : {}}>
          <li>
            {Todo_Description}, {Todo_Deadline}{' '}
            <input
              type="submit"
              onClick={() => removeItem(Todo_Id)}
              value="Remove"
              name="remove"
              className="RemoveInput"
            />
          </li>
        </span>
      </div>
    );
  }
}

export default TodoList;
