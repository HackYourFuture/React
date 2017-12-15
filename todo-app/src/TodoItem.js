import React from 'react';
import Description from './Description';
import Deadline from './Deadline';
import './index.css';

export default class TodoItem extends React.Component {

  render() {
    const {todoItem} = this.props;
    return (
      <li className="TodoItem">
          <div className="Item-info">
            <Description description={todoItem.description}/>
            <Deadline deadline={todoItem.deadline}/>
          </div>
      </li>
    )
  }
}