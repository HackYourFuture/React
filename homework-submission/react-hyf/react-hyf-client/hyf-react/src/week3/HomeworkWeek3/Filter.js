import React from 'react';

const Filter = (props) => {
  const { onClick, icon, type } = props;
  return <div className='filter_icon'>
    <button name={type} onClick={onClick}>{icon}</button>
  </div>
}

export default Filter;