import React from "react";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
class TodoItem extends React.Component {
  state = {
    clicked: false
  };

  toggleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  updateTodo = (e, id) => {
    e.preventDefault();
    const description = this.newDescription.value;
    const deadline = this.newDeadline.value;

    this.props.TodoStore.updateTodo(id, description, deadline);
    this.toggleClick();
  };
  editAction = todo =>
    this.state.clicked ? (
      <form
        className="form-inline"
        onSubmit={e => this.updateTodo(e, todo._id)}
      >
        <input
          type="text"
          name="description"
          className="form-control mb-2 mr-sm-2"
          placeholder="description"
          defaultValue={todo.description}
          ref={input => (this.newDescription = input)}
        />
        <input
          type="date"
          name="deadline"
          className="form-control mb-2 mr-sm-2"
          placeholder="deadline"
          defaultValue={todo.deadline}
          ref={input => (this.newDeadline = input)}
        />
        <button type="submit" className="btn btn-success">
          Update
        </button>
        <button className="btn btn-warning" onClick={this.toggleClick}>
          Cancel
        </button>
      </form>
    ) : (
      <span className="todo-text" style={checkboxStyle(todo.done)}>
        {todo.description}, {todo.deadline}
      </span>
    );

  render() {
    const { TodoStore } = this.props;
    const todo = this.props.todo;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={e => TodoStore.onCheck(todo._id)}
        />
        {this.editAction(todo)}
        <button
          type="button"
          className="btn btn-info"
          style={hideButton(this.state.clicked)}
          onClick={this.toggleClick}
        >
          Edit
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
