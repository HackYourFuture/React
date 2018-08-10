import React, { Component } from "react";

class Todo extends Component {
  state = {
    items: [
      "Get out of bed, " + "Wed Sep 13 2017",
      "Brush teeth," + "Thu Sep 14 2017",
      "Eat breakfast, " + "Fri Sep 15 2017"
    ]
  };
  render() {
    return (
      <div>
        <ul className="list">
          {this.state.items.map(item => (
            <li className="item">{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
