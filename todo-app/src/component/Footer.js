import React from 'react';
import { observer, inject } from 'mobx-react'

@inject('TodoStore')
@observer
export default class Footer extends React.Component {

  render() {
    const { todos } = this.props.TodoStore;
    return (
      <div className='footer'>
        <span className='todosInfo'>
          All: ({todos.length})
        </span>
        <span className='todosInfo'>
          Completed:({todos.filter((item) => { return item.done }).length})
        </span>
        <span className='todosInfo'>
          Pending: ({todos.filter((item) => { return !item.done }).length})
        </span>
      </div>
    );
  }
}

