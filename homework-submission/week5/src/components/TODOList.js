/* eslint-disable */
import React, { Component } from 'react';

class TODOList extends Component {
  render() {
    const TODOList = this.props.TODOListItems.map((element, index) =>
      <div key={index}>
        <div onClick={() => this.props.checkStatus(element)} className="todoContent" >

          {element.done ? <span>🔴</span> : <span>🔘</span>}

          <span style={element.done ? { textDecoration: 'line-through' } : {}}><strong>{element.description}</strong>, {new Date (element.deadline).toDateString()} </span>

          <input type="submit" onClick={() => this.props.removeTodoItem(element)} value="Remove" name="remove" className="RemoveInput" />
        </div>
      </div>
    );

    return (
      <div id={this.props.id}>
        {TODOList}
      </div>

    )
  }
}

export default TODOList;

