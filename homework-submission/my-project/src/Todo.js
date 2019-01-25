import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <div className="todo-item">
        <input
          className="checkbox"
          type="checkbox"
          onChange={() => this.props.handleChange(this.props.item)}
          checked={this.props.item.done}
        />
        <p style={{ textDecoration: this.props.item.done ? 'line-through' : '' }}>
          {this.props.item.description}
        </p>
        <p style={{ textDecoration: this.props.item.done ? 'line-through' : '' }}>
          {this.props.item.deadline}
        </p>
        <input type="button" value="edit" onClick={() => this.props.onEdit(this.props.item)} />
        <input type="button" value="remove" onClick={() => this.props.onRemove(this.props.item)} />
      </div>
    );
  }
}
export default Todo;
