import React from 'react';
import { observer } from "mobx-react";

@observer
export default class Footer extends React.Component {

  render() {
    const { todos } = this.props;
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
