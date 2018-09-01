import React from 'react';

class CheckBox extends React.Component {
  render() {
    const { todo } = this.props;
    return <input type="checkbox" onChange={this.props.checkBoxHandler} id={todo.id} checked={todo.done} />;
  }
}

export default CheckBox;