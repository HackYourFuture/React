import React, { Component } from 'react';

class TODOList extends Component {
  render() {
    const {
      TODO_Id,
      TODO_Description,
      TODO_Deadline,
      TODO_Status,
      checkStatus,
      removeItem,
    } = this.props;
    return (
      <div onClick={() => checkStatus(TODO_Id)} class="listContent">
        <span style={TODO_Status ? { textDecoration: 'line-through' } : {}}>
          <li>
            {TODO_Description}, {TODO_Deadline}{' '}
            <input
              type="submit"
              onClick={() => removeItem(TODO_Id)}
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

export default TODOList;
