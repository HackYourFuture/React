import React, { Component } from 'react';

export class TodoItem extends Component {
  // List Item Style
  styleItem = () => {
    return {
      background: 'gray',
      borderBottom: '2px #333 solid',
      listStyle: 'none',
      margin: '1% auto',
      textDecoration: this.props.todo.done ? 'line-through' : 'none',
    };
  };

  // Delete Button Style
  dltBtnStyle = () => {
    return {
      float: 'right',
      borderRadius: '20%',
      background: '#ccc',
      margin: '8px 1px',
    };
  };

  render() {
    // Props
    const { todo, dltItem, toggleCheckbox } = this.props;

    // Props.todo
    const { id, desc } = todo;

    return (
      <div style={this.styleItem()}>
        <li>
          {/* Checkbox */}
          <input type="checkbox" onChange={toggleCheckbox.bind(this, id)} />

          {/* Todo Description */}
          {desc}

          {/* Delete Button */}
          <input
            type="button"
            value="Delete"
            style={this.dltBtnStyle()}
            onClick={dltItem.bind(this, id)}
          />
        </li>
      </div>
    );
  }
}

export default TodoItem;
