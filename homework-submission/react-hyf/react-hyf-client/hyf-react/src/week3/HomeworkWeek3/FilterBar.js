import React from 'react';
import Filter from './Filter';

const FilterBar = (props) => {
  const { items, filter, reset} = props;

  return (
    <div className="filter_bar">
      {items.map((item, index) => {
        return <Filter icon={item.icon} key={index} type={item.type} onClick={filter}/>// {filter}
      })}
      <Filter icon={'all'} onClick={reset} />
    </div>
  )
}

export default FilterBar;