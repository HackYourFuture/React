import React from 'react';
import Item from './Item';

const List = (props) => {
  const { items } = props;
  return (
    <div className='info_list'>
      {items.map((item, index) => <Item key={index} text={item.text} icon={item.icon} />)}
    </div>)
}

export default List;

