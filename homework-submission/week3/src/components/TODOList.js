import React, { Component } from 'react';

class TODOList extends Component {
  render() {
    const { TODO_Id, TODO_Description, TODO_Deadline, TODO_Status, checkStatus, removeTodoItem } = this.props;
    return (
      <div>
        <div onClick={() => checkStatus(TODO_Id)} class="todoContent">
          {TODO_Status ? <span>🔴</span> : <span>🔘</span>}

          <span style={TODO_Status ? { textDecoration: 'line-through' } : {}}><strong>{TODO_Description}</strong>, {TODO_Deadline} </span>

          <input type="submit" onClick={() => removeTodoItem(TODO_Id)} value="Remove" name="remove" className="RemoveInput" />
        </div>
      </div>
    )
  }
}

export default TODOList;