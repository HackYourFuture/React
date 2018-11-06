import React from "react";

class TodoItem extends React.Component {
  state = {
    description: "",
    deadline: "",
    clicked: false
  };

  onEdit = () => {
    this.setState({
      clicked: true
    });
  };
  onCancel = () => {
    this.setState({
      clicked: false
    });
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onUpdate = (e, id) => {
    e.preventDefault();
    const description = this.state.description;
    const deadline = this.state.deadline;
    if (description.length === 0 || deadline.length === 0) {
      return;
    }

    this.props.onUpdate(id, description, deadline);
    this.setState({
      description: "",
      deadline: "",
      clicked: false
    });
  };

  render() {
    const { id, description, deadline, done } = this.props;

    const editAction = this.state.clicked ? (
      <form className="form-inline">
        <input
          type="text"
          name="description"
          onChange={this.onInputChange}
          className="form-control mb-2 mr-sm-2"
          placeholder="description"
          value={this.state.description}
        />
        <input
          type="text"
          name="deadline"
          onChange={this.onInputChange}
          className="form-control mb-2 mr-sm-2"
          placeholder="deadline"
          value={this.state.deadline}
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={e => this.onUpdate(e, id)}
        >
          Update
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={this.onCancel}
        >
          Cancel
        </button>
      </form>
    ) : (
      <span className="todo-text" style={checkboxStyle(done)}>
        {description}, {deadline}
      </span>
    );

    return (
      <li>
        <input type="checkbox" checked={done} onChange={this.props.onChange} />
        {editAction}
        <button
          type="button"
          className="btn btn-info"
          style={hideButton(this.state.clicked)}
          onClick={this.onEdit}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.props.onRemove}
        >
          Remove
        </button>
      </li>
    );
  }
}

function checkboxStyle(checked) {
  return {
    textDecoration: checked ? "line-through" : "none"
  };
}

function hideButton(clicked) {
  return {
    display: clicked ? "none" : "block"
  };
}

export default TodoItem;
