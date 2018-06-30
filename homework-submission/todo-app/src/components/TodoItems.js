import React from "react";
import "../App.css";
class TodoItems extends React.Component {
  render() {
    const todoListItems = this.props.state.data.map((item, i) => (
      <li key={item.description + i}>
        <input
          type="checkbox"
          onClick={() => this.props.checkHandler(item)}
          defaultChecked={item.done}
          className="checkItem"
        />

        <label className="listItem">
          {item.description} , {new Date(item.deadline).toDateString()}
        </label>
        <input
          type="submit"
          onClick={e => this.props.removeHandler(e, item)}
          value="Remove"
          name="remove"
          className="remove"
        />
      </li>
    ));
    return (
      <div id={this.props.id}>
        <ul>{todoListItems}</ul>
        {todoListItems.length === 0 ? (
          <h2 className="no-items">No items to show...</h2>
        ) : null}
      </div>
    );
  }
}

export default TodoItems;
