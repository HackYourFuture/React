import React from "react";
import Deadline from "./Deadline";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    this.OnEdit = this.OnEdit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
  }

  OnEdit() {
    this.setState({ isEditing: true });
  }

  onCancel() {
    this.setState({ isEditing: false });
  }

  onUpdateClick(e) {
    e.preventDefault();
    let oldTodo = this.props.description;
    let newTodo = this.refs.editedTodo.value;

    this.props.onUpdate(oldTodo, newTodo);
    this.setState({ isEditing: false });
  }

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
              ref="editedTodo"
              className="editing-input"
            />
          </form>
        </td>
      );
    }

    return (
      <td
        key={this.props.index}
        style={done ? listStyle : {}}
        className="todos-td"
      >
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
