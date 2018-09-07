import React from "react";
import Deadline from "./Deadline";
class TodoItem extends React.Component {
  state = {
    isEditing: false
  };

  OnEdit = () => {
    this.setState({ isEditing: true });
  };
  onCancel = () => {
    this.setState({ isEditing: false });
  };
  onUpdateClick = e => {
    e.preventDefault();
    let oldTodo = this.props.description;
    let newTodo = this.editedTodo.value;
    this.props.onUpdate(oldTodo, newTodo);
    this.setState({ isEditing: false });
  };
  renderButtons() {
    if (this.state.isEditing) {
      return (
        <td className="actionButton todos-td">
          <button onClick={this.onUpdateClick}> Update </button>
          <button onClick={this.onCancel}>Cancel </button>
        </td>
      );
    }
    return (
      <td className="actionButton todos-td">
        <button onClick={this.OnEdit}> Edit </button>
        <button onClick={this.props.onRemove}>Remove </button>
      </td>
    );
  }
  renderTodos() {
    let done = this.props.done;
    let listStyle = {
      textDecoration: "line-through"
    };
    if (this.state.isEditing) {
      return (
        <td className="todos-td">
          <form onSubmit={this.onUpdateClick}>
            <input
              defaultValue={this.props.description}
              ref={el => (this.editedTodo = el)}
              className="editing-input"
            />
          </form>
        </td>
      );
    }
    return (
      <td style={done ? listStyle : {}} className="todos-td">
        {this.props.children}
        <strong> {this.props.description} </strong>
      </td>
    );
  }
  render() {
    return (
      <tr>
        {this.renderTodos()}
        <td className="todos-td">
          <Deadline deadline={this.props.deadline} />
        </td>
        {this.renderButtons()}
      </tr>
    );
  }
}
export default TodoItem;
