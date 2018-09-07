import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('todos')
@observer

class CheckBox extends React.Component {
  render() {
    const { todo } = this.props;
    const { checkBoxHandler } = this.props.todos;
    return <input type="checkbox" onChange={() => checkBoxHandler(todo.id)} id={todo.id} checked={todo.done} />;
  }
}

export default CheckBox;