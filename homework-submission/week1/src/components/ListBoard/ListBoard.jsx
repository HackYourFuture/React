import React from 'react';
import './ListBoard.css';




const ListBoard = (props) => {
  const {name, children} = props;
  return(
    <div className='list'>
    <h3>{name}</h3>
    <ul>
    {children}
    </ul>
    </div>
  )
}


export default ListBoard;