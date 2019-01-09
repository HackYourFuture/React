import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      description: this.props.description,
      deadline: this.props.deadline,
      done: this.props.done
    };
  }
  markAs() {
    console.log(this.state.done);
    this.state.done ? this.setState({ done: false }) : this.setState({ done: true });

  }
  render() {
    return (
      <ul>
        <li style={{ textDecoration: this.state.done ? "line-through" : "" }}>
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.done}
            onChange={this.markAs.bind(this)} />
          {this.state.description}, {this.state.deadline}</li>
      </ul >
    );
  }
}

export default Todo;