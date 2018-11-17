import React from "react";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
class TodoList extends React.Component {
  state = {
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
  updateTodo = (e, id) => {
    e.preventDefault();
    const description = this.newDescription.value;
    const deadline = this.newDeadline.value;

    this.props.TodoStore.updateTodo(id, description, deadline);
    this.setState({
      clicked: false
    });
  };

  editAction = todo =>
    this.state.clicked ? (
      <form className="form-inline" onSubmit={e => this.updateTodo(e, todo.id)}>
        <input
          type="text"
          name="description"
          className="form-control mb-2 mr-sm-2"
          placeholder="description"
          ref={input => (this.newDescription = input)}
        />
        <input
          type="text"
          name="deadline"
          className="form-control mb-2 mr-sm-2"
          placeholder="deadline"
          ref={input => (this.newDeadline = input)}
        />
        <button type="submit" className="btn btn-success">
          Update
        </button>
        <button className="btn btn-warning" onClick={this.onCancel}>
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

    const showTodoElements =
      TodoStore.todos.length !== 0 ? (
        TodoStore.todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={e => TodoStore.onCheck(e, todo.id)}
            />
            {this.editAction(todo)}
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
              onClick={e => TodoStore.removeTodo(e, todo.id)}
            >
              Remove
            </button>
          </li>
        ))
      ) : (
        <li>
          <p>The list is empty!</p>
        </li>
      );

    return <ul className="list">{showTodoElements}</ul>;
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

export default TodoList;
