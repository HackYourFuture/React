import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('todos')
@observer

class CheckBox extends React.Component {
  render() {
    const { todo } = this.props;
    return <input type="checkbox" onChange={() => this.props.todos.checkBoxHandler(todo._id)} id={todo._id} checked={todo.done} />;
  }
}

export default CheckBox;