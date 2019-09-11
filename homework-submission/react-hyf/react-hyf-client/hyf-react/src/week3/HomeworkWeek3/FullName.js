import React from 'react';

const FullName = (props) => {
  const {name, surname } = props;
  return <h2>{name} {surname}</h2>
}

export default FullName;