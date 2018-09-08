import React from "react";

class ItemsTodo extends React.Component {
  render() {
    const items = this.props.todos.map((item, i) => (
      <li key={i}>
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
      <div id={this.props.id}>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default ItemsTodo;
