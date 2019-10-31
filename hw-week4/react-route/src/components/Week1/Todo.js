import React from 'react';

// This component renders a todo item which contains description and deadline
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { done: this.props.done };
    this.itemDone = this.itemDone.bind(this);
  }

  itemDone() {
    this.setState({ done: !this.state.done });
  }

  render() {
    const { description, deadline } = this.props;

    return (
      <li
        onClick={this.itemDone}
        className={`list-box ${this.state.done ? 'font-color' : 'bg-color-hover'}`}
      >
        <div>
          <span className={`block ${this.state.done && 'through'}`}>{description}</span>
          <span>{deadline}</span>
        </div>
      </li>
    );
  }
}

export default Todo;
