import React from 'react';

//the goal of this component is to create a list item
class Item extends React.Component {
  render() {
    const { description, deadline, done, todoId } = this.props;
    return (
      <li key={todoId} className={done ? 'item-list' : ''}>
        {description}, {deadline}
      </li>
    );
  }
}

export default Item;