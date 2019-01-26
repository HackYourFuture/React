import React from 'react';
import Edit from './Edit';

class Todo extends React.Component {
  state = { editing: false };
  handleEdit = () => this.setState({ editing: true });
  handleCancel = () => this.setState({ editing: false });
  handleUpdate = (updatedItem, i) => {
    this.props.handleUpdate(updatedItem, i);
    this.setState({ editing: false });
  };
  render() {
    return this.state.editing ? (
      <Edit
        item={this.props.item}
        key={this.props.item.id}
        index={this.props.index}
        onUpdate={this.handleUpdate}
        handleCancel={this.handleCancel}
      />
    ) : (
      <div className="todo-item">
        <input
          className="checkbox"
          type="checkbox"
          onChange={() => this.props.handleChange(this.props.index)}
          checked={this.props.item.done}
        />
        <p className={this.props.item.done ? 'done-item' : ''}>{this.props.item.description}</p>
        <p className={this.props.item.done ? 'done-item' : ''}>{this.props.item.deadline}</p>
        <input type="button" value="edit" onClick={this.handleEdit} />
        <input type="button" value="remove" onClick={() => this.props.onRemove(this.props.index)} />
      </div>
    );
  }
}
export default Todo;
