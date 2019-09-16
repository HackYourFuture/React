import React from 'react';

const FullName = (props) => {
  const {name, surname } = props;
  return <h2 className= 'full-name'>{name} {surname}</h2>
}

export default FullName;