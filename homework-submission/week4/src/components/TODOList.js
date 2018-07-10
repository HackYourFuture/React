/* eslint-disable */
import React, { Component } from 'react';

class TODOList extends Component {
  render() {
    const TODOList = this.props.TODOListItems.map((element, index) =>
      <div key={index}>
        <div onClick={() => this.props.checkStatus(element.id)} class="todoContent" >

          {element.done ? <span>💙</span> : <span>🖤</span>}

          <span style={element.done ? { textDecoration: 'line-through' } : {}}><strong>{element.description}</strong>, {element.deadline} </span>

          <input type="submit" onClick={() => this.props.removeTodoItem(element.id)} value="Remove" name="remove" className="RemoveInput" />
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

