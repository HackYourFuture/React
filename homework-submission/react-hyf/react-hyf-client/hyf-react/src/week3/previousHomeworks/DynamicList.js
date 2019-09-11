import React from 'react';
import Item from './Item';
import Button from './Button';

//the goal of this component is to dynamically render todoList using map() function:
class DynamicList extends React.Component {
  render() {
    const { items, deleteItem } = this.props;
    return (
      <ul>
        {items.map((item, index) => (
          <div key={index} className="item-wrapper">
            <Item description={item.description} deadline={item.deadline} done={item.done} />
            <Button id={item.id} type="button" text="Delete" onClick={deleteItem} />
          </div>
        ))}
      </ul>
    );
  }
}

export default DynamicList;