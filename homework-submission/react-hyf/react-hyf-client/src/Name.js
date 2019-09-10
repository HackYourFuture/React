import React from 'react';

const Name = ({ name, surname }) => {
  return (
    <div>
      <h1>{name + ' ' + surname}</h1>
    </div>
  );
};

export default Name;
