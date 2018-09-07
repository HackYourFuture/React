import React from "react";

class TodoItem extends React.Component {
  render() {
    let done = this.props.done;
    let listStyle = {
      textDecoration: "line-through"
    };

    return (
      <li style={done ? listStyle : {}}>
        <strong> {this.props.description} </strong>, {this.props.deadline}
        {this.props.children}
      </li>
    );
  }
}

export default TodoItem;
