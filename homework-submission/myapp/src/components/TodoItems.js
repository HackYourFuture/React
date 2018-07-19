import React from "react";

class TodoItems extends React.Component {
  render() {
    const todosItems = this.props.todosList.map((item, index) => (
      <li key={index}>
        <input
          type="checkbox"
          onClick={() => this.props.checker(item)}
          defaultChecked={item.done}
        />
        <label>
          {item.description} , {new Date(item.deadline).toDateString()}
        </label>
        <input
          type="submit"
          onClick={() => this.props.remover(item)}
          value="Remove"
          name="remove"
        />
      </li>
    ));

    return (
      <div id={this.props._id}>
        <ul>{todosItems}</ul>
      </div>
    );
  }
}

export default TodoItems;
